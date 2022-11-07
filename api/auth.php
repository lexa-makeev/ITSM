<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include "hrlib.php";
$db = new DB;

$email = $_POST["email"];
$pass = $_POST["pass"];
if (isset($email) && isset($pass))
{
    $data = $db->check_email($email);
    if ($data != null) {
        $pass_bd = $data['pass'];
        if (password_verify($pass, $pass_bd) === true){
            echo json_encode(array("auth"=> true, "role" => $data['role']));
        }
        else{
            echo json_encode(1);
        }
    }
    else{
        echo json_encode(2);
    }
}
else{
    return 0;
}