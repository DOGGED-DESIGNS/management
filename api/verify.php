<?php 

require_once "./php/functions.php";

$funct = new Funct();


if($_SERVER['REQUEST_METHOD'] == 'GET'){

    if(isset($_GET['email'])){
        $email = $_GET['email'];

        if($funct->verifymail($email)){
            print_r(json_encode(array('message'=>'email verified','error'=>false)));
            http_response_code(200);
           exit();
        }
    }
   
}


?>