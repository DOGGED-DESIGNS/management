<?php

use Firebase\JWT\JWT;

require_once "./php/define.php";


require_once "./php/php-jwt-main/src/JWT.php";

require_once './php/functions.php';

header('Access-Control-Allow-Origin: POST');

 header('Content-Type: application/json');

 $data = json_decode(file_get_contents("php://input"));

 if($_SERVER['REQUEST_METHOD'] == "POST"){
   $funct = new Funct();

   
   $email = $funct->testInput($data->email);
   $pass = $funct->testInput($data->password);

    $login = $funct->login($email);

    if($login){
        if(password_verify($pass, $login['password'])){

        //    creating a token;
        $payload = array("user_id"=>$login['id'],'email'=>$login['email'] );
        $secret =  'this secret is very important';

        $token = JWT::encode($payload, $secret, 'HS256');

        // end of token

            $arr = array("message"=>"user logged in successfully","token"=>$token);
            http_response_code(200);
            print_r(json_encode($arr));
        }else{
            $arr = array("message"=>"password does not match", "error"=>true);
            http_response_code(400);
            print_r(json_encode($arr));
        }
    }else{
        $mess = array("message"=>"wrong email adress", "error"=>true);
        http_response_code(400);
        print_r(json_encode($mess));
    }

 }else{
    http_response_code(500);
    print_r(json_encode(array("error"=>"this is a wrong request")));
 }



?>