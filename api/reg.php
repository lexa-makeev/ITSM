<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include "hrlib.php";
$db = new DB;

$email = $_POST["email_reg"];
$pass = $_POST["pass_reg"];
$role = $_POST["role"];
$name = $_POST["name_reg"];
$fam = $_POST["fam_reg"];
$otch = $_POST["otch_reg"];
$tel = $_POST["tel_reg"];
if (isset($email) && isset($pass) && isset($role) && isset($name) && isset($fam) && isset($otch))
{
    $result = $db->reg($email, $pass, $role, $name, $fam, $otch, $tel);
    echo json_encode($result);
}
else{
    return 0;
}

