
<?php
include('connection.php');
$num1 = $_POST["search"];
//getting data by live search from database
$databaseData = "SELECT * FROM name WHERE name LIKE '{$num1}%'";
$result = $connection->query($databaseData);
$serial = 1;

//showing data one by one
if(mysqli_num_rows($result)>0){
    while ($data = $result->fetch_assoc()) {
?>
    <tr >
        <td class="text-center">
            <?php echo $serial++; ?>
        </td>
        <td class="text-center">
            <?php echo $data['name']; ?>
        </td>
    </tr>
<?php 
    }}
    else{ ?>
        <tr>
        <td colspan="2" style="text-align: center;padding:20px"><b>Oops!</b> No match found.</td>
        </tr>
<?php
   }
?> 
    

