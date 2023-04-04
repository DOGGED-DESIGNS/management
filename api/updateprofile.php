<?php 

header('Access-Control-Allow-Origin: POST');
require_once "./php/functions.php";

$funct = new Funct();



if(isset($_POST['message']) && $_POST['message'] == 'updateprofile'){
    // get the image name

    // check if there was no file selected

    
    if(!empty($_FILES['image'])){


        $newname = $_FILES['image']['name'];
        $templocation = $_FILES['image']['tmp_name'];
        $imagesize = $_FILES['image']['size'];
        $ext = explode('.',$newname);

        if( ($ext[1]=='png'|| $ext[1]=='jpg'|| $ext[1]=='jpeg') && $imagesize <= "3000000" ){
        //    if the file is not empty

        $name = $funct->testInput($_POST['name']);
        $phone = $funct->testInput($_POST['phone']);
        $bod = $funct->testInput($_POST['bod']);
        $newimagepath = "upload/".$newname;
        $gender = $_POST['gender'];
        $userid = $_POST['userid'];

        // move this to the new path

        if(move_uploaded_file($templocation,$newimagepath)){
            
            if($funct->updateprofile($userid,$bod,$newimagepath,$phone,$name,$gender)){

                print_r(json_encode(array('message'=>'profile uploaded successfully','error'=>false)));
                http_response_code(200);     
                
            };
        }          
        }else{
            print_r(json_encode(array('message'=>'This file is not supported','error'=>true)));
            http_response_code(500);
            
        }
    }else{
       $name = $funct->testInput($_POST['name']);
       $phone = $funct->testInput($_POST['phone']);
       $bod = $funct->testInput($_POST['bod']);
       $photo = $_POST['genimage'];
       $gender = $_POST['gender'];
       $userid = $_POST['userid'];

       $funct->updateprofile($userid,$bod,$photo,$phone,$name,$gender);

       if($funct->updateprofile($userid,$bod,$photo,$phone,$name,$gender) ){
          print_r(json_encode(array('message'=>'profile uploaded successfully','error'=>false)));
          http_response_code(200);
          
       }else{
        echo 'something went wront';
       }


       
    //    $bod = $funct->testInput();


    }
     

    
     
}



?>