
<?php
include('connection.php');
$num1 = $_POST["search"];
$databaseData = "SELECT * FROM name WHERE name LIKE '{$num1}%'";
$result = $connection->query($databaseData);
//$row=$result->fetch_assoc();
$serial = 1;
?>
<table class="table table-hover table-dark" style="border-radius: 20px;">
    <tr>
        <th style="text-align:center;border:0;">SL.</th>
        <th style="text-align:center;border:0;">NAME</th>
    </tr>
<?php
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
    }
?> 
    </table> 

