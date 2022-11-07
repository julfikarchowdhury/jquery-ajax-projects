<?php
$num1 = $_POST["name"];
include('connection.php');
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