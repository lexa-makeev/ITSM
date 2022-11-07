<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include "hrlib.php";
$db = new DB;

$email = $_POST["email_reg"];
$pass = $_POST["pass_reg"];
$role = $_POST["role"];
if (isset($email) && isset($pass) && isset($role))
{
    $result = $db->reg($email, $pass, $role);
    echo json_encode($result);
}
else{
    return 0;
}

