<?php

use Firebase\JWT\JWT;

require_once './php/functions.php';

require_once "./php/php-jwt-main/src/JWT.php";

require_once "./php/define.php";

header('Access-Control-Allow-Origin: POST');

 header('Content-Type: application/json');

 $data = json_decode(file_get_contents("php://input"));

 if($_SERVER['REQUEST_METHOD'] == "POST"){
   $funct = new Funct();

   
   $name = $funct->testInput($data->name);
   $email = $funct->testInput($data->email);
   $pass = $funct->testInput($data->password);
   $hash = password_hash($pass, PASSWORD_DEFAULT);


   // check if email already exist;

   if($funct->userexist($email)){
      $mess = array("message"=>"user already exist", "error"=>true);
      http_response_code(500);
      print_r(json_encode($mess));
   }else{
      $register = $funct->register($name,$email,$hash);

      if($register){

         // generate token
          $val = $funct->userexist($email);

          $payload = array("user_id"=>$val['id'],'email'=>$val['email'] );
          $secret =  'this secret is very important';

 
          $token = JWT::encode($payload, $secret, 'HS256');

         $sign = array("message"=>'signup successfully', "token"=>$token);
         http_response_code(200);
         print_r(json_encode($sign));
      }else{
         $mess = array("message"=>"error in the database", "error"=>true);
         http_response_code(500);
         print_r(json_encode($mess));
      }
   }

 }else{
   http_response_code(500);
   print_r(json_encode(array("error"=>"this is a wrong request")));
 }



?>