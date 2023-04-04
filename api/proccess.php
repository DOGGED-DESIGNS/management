

<?php 

// this is to convert to 

require_once './php/functions.php';
require './php/PHPMailer-master/src/PHPMailer.php';
require './php/PHPMailer-master/src/SMTP.php';
require './php/PHPMailer-master/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require_once "./php/define.php";

require_once "./php/functions.php";

require_once "./php/php-jwt-main/src/JWT.php";


use Firebase\JWT\JWT;


header('Access-Control-Allow-Origin: POST');

header('Content-Type: application/json');

// header('multipart/form-data');

// header('application/x-www-form-urlencoded');

$data = json_decode(file_get_contents("php://input"));

$funct = new Funct();


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


if($_SERVER['REQUEST_METHOD'] == 'POST'){
    // check if request comes with a token

      $header = getallheaders();
    if(!empty($header['Authorization']) && $header['Authorization'] != "Bearer"){
        
      $authHeader= $header['Authorization'] ;        // echo $header['Authorization'] ;
      $bearerToken = trim(str_replace("Bearer ", " ", $authHeader));
       list($header,$payload,$signature) = explode(".", $bearerToken);
       $jsontoken= base64_decode($payload);
       $arraytoken= json_decode($jsontoken, true);
       if($arraytoken){
        //  now make your special request to the database
        if($data->message && $data->message == 'drawall'){

          $data = $funct->drawall($arraytoken['user_id']);

          print_r(json_encode($data));
          exit();

        
        }
        if($data->message && $data->message == 'drawnote'){

          $data = $funct->drawnote($arraytoken['user_id']);

          print_r(json_encode($data));

          exit();


        }
        // draw notifications
        if($data->message && $data->message == 'drawnotification'){
          $data = $funct->drawnotification($arraytoken['user_id']);

          $arrtest = array();

          foreach($data as $d){

            $secondarr = array("id"=>$d['id'], "uid"=>$d['uid'],"type"=>$d['type'], "message"=>$d['message'],"created_at"=>$funct->timeinago($d['created_at']));

             array_push($arrtest,$secondarr);
            // print_r(json_encode($secondarr));
          }
          print_r(json_encode($arrtest));
          http_response_code(200);
          exit();

        }
        // post feedback;
        if($data->message && $data->message == 'postfeedback'){
   
          $data= $funct->postfeedback($arraytoken['user_id'],$data->subject,$data->feedback);

           if($data){
            print_r(json_encode(array("message"=>"we will getback to you shortly","error"=>false)));
            exit();

          }else{
            print_r(json_encode(array("message"=>"something went wrong","error"=>true)));
            exit();
           }
          exit();
          
        }

        // draw single note

        if($data->message && $data->message == 'onenote'){

          $data = $funct->onenote($data->noteid);

          print_r(json_encode($data));

          exit();

        }
        // verify mail
        if($data->message && $data->message == 'verifymail'){



          // check if user exist;
           $check = $funct->userexist($arraytoken['email']);
      
           if($check){
        
               if(sendmail("verify your email","
               <h3>
               Click the link below to reset your password. </br> 
               <a href='http://localhost/test/test.php?email=".$arraytoken['email']."' >
                 click here to veriy your email..
               </a>
               </h3>
               ",$arraytoken['email'])){
      
                  print_r(json_encode(array("message"=>" email sent: please check your main within 10 minutes ", "error"=>false)));
                  http_response_code(200);
                  exit();
               }else{
                  print_r(json_encode(array("message"=>" email sent: something went wrong while tyring to send mail", "error"=>true)));
                  http_response_code(500);
                  exit();
               };
           }else{
              http_response_code(400);
              print_r(json_encode(array("message"=>"user not found", "error"=>true)));
              exit();
           }
           
        }
        // update profile
      
        if($data->message && $data->message == 'postnote'){
          $data = $funct->postnote($arraytoken['user_id'],$data->note,$data->title);

          if($data){
            print_r(json_encode(array("message"=>"note added successfully","error"=>false)));
            http_response_code(200);
            exit();
          }else{
            print_r(json_encode(array("message"=>"something went wrong","error"=>true)));
            http_response_code(500);
            exit();
           }

        }

       }else{
         print_r(json_encode(array('message'=>"something went wrong", "error" =>true)));
         exit();

       }

    }else{
        print_r(json_encode(array("message"=>"provide token","error"=>true)));
    }
}



?>