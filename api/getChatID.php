<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include "hrlib.php";
$db = new DB;
$id = $_POST["id"];
$email = $_POST["email"];
if (isset($id)) {
    $result = $db->getMessageID($id, $email);
    echo json_encode($result);
} else {
    return 0;
}