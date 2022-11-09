<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include "hrlib.php";
$db = new DB;
$name = $_POST["name"];
$components = $_POST["components"];
if (isset($name) && isset($components)) {
    $result = $db->addCatalog($name, $components);
    echo json_encode($result);
} else {
    return 0;
}