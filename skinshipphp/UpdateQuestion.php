<?php


include 'DBConfig.php';
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$Qname = $obj['user_name'];
$Qskin = $obj['skin'];
$Qallergies = $obj['allergies'];
$Qexample = $obj['example'];

$Sql_Query = "UPDATE question SET skin= '$Qskin', allergies= '$Qallergies', example= '$Qexample' WHERE user_name= '$Qname'";

if(mysqli_query($con,$Sql_Query)){
    $MSG = 'Record Successfully';

    $json = json_encode($MSG);

    echo $json;

} else {
    echo 'Try Again';
}
mysqli_close($con);

?>