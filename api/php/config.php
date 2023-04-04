<?php 

class Database {

   private $dsn = "mysql:host=localhost;dbname=manage";

   private $dbuser = "root";

   private $password = "dogged8000";

   public $con ;

    public  function __construct()
   {
     try{
         $this->con=  new PDO($this->dsn,$this->dbuser,$this->password);
     }catch(Exception $e){
        echo  $e->getMessage();
     }

      return $this->con;
   }

}



?>