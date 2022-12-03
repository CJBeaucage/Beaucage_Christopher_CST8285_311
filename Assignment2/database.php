<?php

$server = "localhost:3308";
$user = "appuser";
$pass = "";
$name = "medialogue";


function data_connect()
{
  $connection = mysqli_connect($server, $user, $pass, $name);
  if (mysqli_connect_errno()) {
    $msg = "Connection failed: ";
    $msg .= mysqli_connect_error();
    $msg .= " (" . mysqli_connect_errno() . ")";
    exit($msg);
  }

  return $connection;
}


function data_disconnect($connection)
{
  if (isset($connection)) {
    mysqli_close($connection);
  }
}

?>