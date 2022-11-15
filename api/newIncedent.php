<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include "hrlib.php";
$db = new DB;
$topic = $_POST["topic"];
$usluga = $_POST["usluga"];
$type = $_POST["type"];
$status = $_POST["status"];
$EndTime = $_POST["EndTime"];
$opis = $_POST["opis"];
$otvetsv = $_POST["otvetsv"];
$kontragent = $_POST["kontragent"];
if (isset($topic) && isset($usluga) && isset($type) && isset($status) && isset($EndTime) && isset($opis) && isset($otvetsv) && isset($kontragent)) {
    $result = $db->sendIncedent($topic, $usluga, $type , $status, $EndTime, $opis, $otvetsv, $kontragent);
    echo json_encode($result);
} else {
    return 0;
}