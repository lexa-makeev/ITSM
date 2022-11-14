<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include "hrlib.php";
$db = new DB;
$email = $_POST["email"];
$id = $_POST["id"];
if (isset($email)) {
    $result = $db->getMessageID($email, $id);
    echo json_encode($result);
} else {
    return 0;
}