<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include "hrlib.php";
$db = new DB;
$toID = $_POST["toID"];
$fromID = $_POST["fromID"];
$message = $_POST["message"];
$now = new DateTime();
$date = $now->format('Y-m-d H:i:s');
if (isset($toID) && isset($fromID) && isset($message)) {
    $result = $db->sendMessage($toID, $fromID, $message, $date);
    echo json_encode($result);
} else {
    return 0;
}