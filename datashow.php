<?php
    include('connection.php');
//showing all data from database
    $databaseData = "SELECT * FROM name";
    $result = $connection->query($databaseData);
    $serial = 1;

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
    