<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include "hrlib.php";
$db = new DB;
$id = $_POST["id"];
$end_date = $_POST["end_date"];
if (isset($id) && isset($end_date)) {
    $result = $db->updateEndTime($id, $end_date);
    echo json_encode($result);
} else {
    return 0;
}