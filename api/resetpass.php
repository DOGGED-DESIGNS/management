

<?php

require_once './php/functions.php';

header('Access-Control-Allow-Origin: POST');

 header('Content-Type: application/json');

 $data = json_decode(file_get_contents("php://input"));

 $funct = new Funct();


 if($_SERVER['REQUEST_METHOD'] == "POST" ){
    $pass = $funct->testInput($data->password);
    $email = $funct->testInput($data->email);
    if($funct->update_pass($pass, $email)){
        http_response_code(200);
        print_r(json_encode(array("message"=>"password changed successfully", "error"=>false)));
    }
 }else{
    http_response_code(500);
    print_r(json_encode(array("message"=>"invalid request", "error"=>true)));
 }



?>