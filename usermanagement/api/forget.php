<?php 
require_once './php/functions.php';
require './php/PHPMailer-master/src/PHPMailer.php';
require './php/PHPMailer-master/src/SMTP.php';
require './php/PHPMailer-master/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

header('Access-Control-Allow-Origin: POST');

 header('Content-Type: application/json');

 require_once './php/functions.php';


 $data = json_decode(file_get_contents("php://input"));

 $funct = new Funct();


  if($_SERVER['REQUEST_METHOD'] = "POST"){

    $email = $funct->testInput($data->email);

    // check if user exist;
     $check = $funct->userexist($email);

     if($check){
      $token = uniqid();
      $token = str_shuffle($token);
      $checkz = $funct->forgetpassword($token,$email);
      if($checkz){
         if(sendmail("reset main","
         <h3>
         Click the link below to reset your password. </br> 
         <a href='http://localhost/test/test.php?email=".$email."&token=".$token."' >
mail
         </a>
         </h3>
         ",$email)){

            print_r(json_encode(array("message"=>" email sent: please check your main within 10 minutes ", "error"=>false)));
            http_response_code(200);
            exit();
         }else{
            print_r(json_encode(array("message"=>" email sent: something went wrong while tyring to send mail", "error"=>true)));
            http_response_code(500);
            exit();
         };
        

         
         
      }else{
         http_response_code(500);

         print_r(json_encode(array("message"=>" something went wrong ", "error"=>true)));

         exit();
      }


     }else{
        http_response_code(400);
        print_r(json_encode(array("message"=>"user not found", "error"=>true)));
        exit();
     }

  }

 function sendmail($subject,$message,$sendto){
    // clyxykgznbgiqukf
   $mail = new PHPMailer();
   $mail->isSMTP();
   // define smtp host
   $mail->Host= "smtp.gmail.com";
   // enable smtp authentication
   $mail->SMTPAuth = "true";
   // set type of encryption (ssl/tls);
   $mail->SMTPSecure="tls";
   // set port to connect smtp
   $mail->Port="587";
   // set gmail username
   $mail->Username= "michealmodesta37@gmail.com";
   // set email password
   $mail->Password= "clyxykgznbgiqukf";
   // set senders emai;
  
   // SUBJECT;
  $mail->Subject= $subject;
   // SEND FROM
  
   $mail->setFrom("michealmodesta37@gmail.com");
   // active html
   $mail->isHTML(true);
   // email body
   $mail->Body=$message;
   // add recipiet adress
   $mail->addAddress($sendto);
   // finally send mai
   if($mail->send()){
    $mail->smtpClose();
    return true;
   }else{
    $mail->smtpClose();
    return false;
   }
  }

//   sendmail("POTENTIAL CLIENT","this is to test if mail will work", " Bencodelightconstructions@gmail.com");


//  if($test1){
//     echo ' email was send';
//  }else{
//     echo "email was not sent";
//  }



?>