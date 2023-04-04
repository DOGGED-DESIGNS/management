<?php 

header('Access-Control-Allow-Origin: POST');

 header('Content-Type: application/json');

 require_once './php/functions.php';


 $funct = new Funct();


 $data = json_decode(file_get_contents("php://input"));

 if($_SERVER['REQUEST_METHOD'] == 'POST'){

    $newpassword = $funct->testInput($data->newpassword);
    $oldpass = $funct->testInput($data->oldpassword);
    
    // get the old password;

     $arr = $funct->login($data->email);

     if(password_verify($oldpass, $arr['password'])){
       if($funct->update_pass($newpassword,$data->email)){
        print_r(json_encode(array("message"=>"password changed successfully", "error" =>false)));
        exit();
       }   
     }else{
        print_r(json_encode(array("message"=>"your previous password is incorrect", "error" =>true)));
        exit();
     }

    

 }


?>