<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include "hrlib.php";
$db = new DB;
$id = $_POST["id"];
$name = $_POST["name"];
$components = $_POST["components"];
$opis = $_POST["opis"];
$cost = $_POST["cost"];
if (isset($id) && isset($name) && isset($components)) {
    $result = $db->updateCatalog($id, $name, $components, $opis, $cost);
    echo json_encode($result);
} else {
    return 0;
}