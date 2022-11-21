<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include "hrlib.php";
$db = new DB;
$email = $_POST["email"];
if (isset($email)) {
    $result = $db->getMessageAdmin($email);
    echo json_encode($result);
} else {
    return 0;
}