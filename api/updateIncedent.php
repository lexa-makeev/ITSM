<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include "hrlib.php";
$db = new DB;
$id = $_POST["id"];
$value = $_POST["value"];
if (isset($id) && isset($value)) {
    $result = $db->updateIncedent($id, $value);
    echo json_encode($result);
} else {
    return 0;
}