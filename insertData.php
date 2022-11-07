<?php
$num1 = $_POST["name"];
//connection mysql
include('connection.php');
//inserting data in database
if($connection){
    foreach($num1 as $num){
        $num=$num;
        $query = "INSERT INTO name (name) VALUES ('$num')";
        $query_run = mysqli_query($connection, $query);
    }
}else{
    echo("<script>alert('connection unsuccessfull')</script>");

}
// 
header("Location: http://localhost/jqueryprojects/index1.php");
exit();
//print_r($num)
?>