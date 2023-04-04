

<?php 
require_once "config.php";




  class Funct extends Database {
     
    // this is to test thie input
  public function testInput($da){
      $data = trim($da);
      $data = htmlspecialchars($data);
      $data = stripslashes($data);
      return $data;
    }
//  register new users
public function register($name, $email, $pass){
  try{
    $sql = "INSERT into users (name, email, password) values( ?, ? ,? )";
  
    $stm1 = $this->con->prepare($sql);
    $stm2 = $stm1->execute([$name, $email, $pass]);
     
    return true;

  }catch(Exception $e){
    return false;
  }

}

// users exist
 public function userexist($email){
  try{
    $sql= "SELECT email, id from users where email = ?";

    $stmt1 = $this->con->prepare($sql);
    $stmt2 = $stmt1->execute([$email]);
    $all = $stmt1->fetch();
    return $all;
    
  }catch(Exception $e){
    return false;
  }

 }  

//  login

 public function login($email){
  try{
    $sql = " SELECT id, email, password from users where email = ? and deleted != 0 ";
    $stmt1 = $this->con->prepare($sql);
    $stmt2 = $stmt1->execute([$email]);

    $all = $stmt1->fetch();
    return $all;
  }catch(Exception $e){
    return array('message'=>$e->getMessage(),"error"=>true);
  }
 }

//creating token

public function forgetpassword ($token, $email) {
 try{
  //  $sql = "SELECT * from users where email = ? and deleted != 0";
  $sql = "UPDATE users SET token = ?, token_expire = DATE_ADD(NOW(), INTERVAL 10 MINUTE) where email = ?";
    $stmt1 = $this->con->prepare($sql);

    $stmt1->execute([$token, $email]);

    return true;
 }catch(Exception $e){
    return false;
 }
}

// reset password auth

public function reset_pass_auth($email, $token){
   $sql = "SELECT * from users where email = ? and token = ? and token_expire > NOW() and deleted !=0 ";

   $stmt1 = $this->con->prepare($sql);

    $stmt1->execute([$email, $token]);

    $all = $stmt1->fetch();

    return $all;
}

// update passwordk

public function update_pass($pass, $email){
    $passz = password_hash($pass, PASSWORD_DEFAULT );
    
  try{

        $sql = "UPDATE users SET password = ?  where email = ? and deleted !=0";

        $stmt1= $this->con->prepare($sql);

        $stmt1->execute([$passz, $email]);
        
        return true;

  }catch(Exception $e){
    return false;
  }
}


// gettting a single user information

public function drawall ($userid){

  $sql = 'SELECT * FROM users where id = ?';

  $stmt1 = $this->con->prepare($sql);

  $stmt1->execute([$userid]);

  $all = $stmt1->fetchAll();

  return $all;

}

// draw notes for one user

 public function drawnote($userid){

  $sql = "SELECT * from notes where uid = ?";
  $stmt1 = $this->con->prepare($sql);

  $stmt1->execute([$userid]);

  $all = $stmt1->fetchAll();

  return $all;

 }
 public function drawnotification($userid){

  $sql = "SELECT * from notification where uid = ?";
  $stmt1 = $this->con->prepare($sql);

  $stmt1->execute([$userid]);

  $all = $stmt1->fetchAll();

  return $all;

 }


 public function postfeedback($userid,$subject,$feedback){
  
  try{
    $sql = "INSERT INTO feedback (uid, subject, feedback, created_at ) values(?, ?,?, now()) ";

    $stmt1 = $this->con->prepare($sql);

    $stmt1 =  $stmt1->execute([$userid,$subject,$feedback]);

    return true;
  }catch(Exception $e){

    return false; 
  }
 }

 public function onenote ($id){

  $sql = "SELECT * from notes where id = ?";

  $stmt1 = $this->con->prepare($sql);

  $stmt1->execute([$id]);

  $all = $stmt1->fetch();

  return $all;

 }

//  post note

public function postnote($uid,$note, $title){

  try{
    $sql = "INSERT into notes (uid, note, title, created_at) values(?, ?,?, now())";
    $stmt1 = $this->con->prepare($sql);
  
    $stmt1->execute([$uid,$note,$title]);
    return true;
  }catch(Exception $e){
    return false;
  }
 
}

// set time in ago

public function timeinago($timestamp){

  date_default_timezone_set('Africa/Lagos');

  $timestamp = strtotime($timestamp);

  $time = time() - $timestamp;

  if ($time) {
    if ($time <= 60) {
      return "just now";
    }
    if ($time >= 60 && $time < 3600) {
      return round($time / 60) === 1
        ? "a minute ago"
        : round($time / 60).' minutes ago';
    }
    if ($time >= 3600 && $time < 86400) {
      return round($time / 3600) == 1
        ? "1 hour ago"
        : round($time / 3600). ' hours ago';
    }
    if ($time >= 86400 && $time < 604800) {
      return round($time / 86400) == 1
        ? "a day ago"
        : round($time / 86400). ' days ago';
    }
    if ($time >= 604800 && $time < 2419200) {
      return round($time / 604800) == 1
        ? "a week ago"
        : round($time / 604800) . ' weeks ago';
    }
    if ($time >= 2419200 && $time < 29030400) {
      return round($time / 2419200) == 1
        ? "a month ago"
        : round($time / 2419200) .' months ago';
    }
    if ($time >= 29030400 && $time < 2903040000) {
      return round($time / 29030400) == 1
        ? "a year ago"
        : round($time / 29030400) . " years ago";
    }
  }

}

  public function verifymail($email){
    $sql = "UPDATE users set verify = 1 where email = ?";

    $stmt1 = $this->con->prepare($sql);
    $stmt1->execute([$email]);
    return true;
  }
  // update users profile

  public function updateprofile($userid, $bod, $photo,$phone, $name, $gender){
   $sql = "UPDATE users SET name = ?, photo = ?, phone =?, gender=?, bod = ? where id = ? ";

   $stmt1 = $this->con->prepare($sql);
   $stmt1->execute([$name,$photo,$phone,$gender,$bod,$userid]);

   return true;

  }
  }


?>