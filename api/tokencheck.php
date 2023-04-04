<?php 
   header('Access-Control-Allow-Origin: GET');

   require_once './php/functions.php';

   $funct = new Funct();


   if($_SERVER['REQUEST_MEHOD']= "GET"){
       if(isset($_GET['email']) && isset($_GET['token'])){

        $email = $funct->testInput($_GET['email']);
        $token = $funct->testInput($_GET['token']);

        
        if($funct->reset_pass_auth($email, $token)){
            print_r(json_encode(array('message'=>"".$email."", "error"=>false)));
            exit();
            http_response_code(400);
            exit();
        }else{
            print_r( json_encode(array('message'=>"token expired please try agian", "error"=>true)));
            exit();
            http_response_code(400);
            exit();
        }
        
       }else{
        print_r( json_encode(array('message'=>"no token or email present", "error"=>true)));
        exit();
       }
   }



?>