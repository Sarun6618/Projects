<?php
session_start();
$con=mysqli_connect("localhost","root","","Admin");
if(mysqli_connect_error())
{
    echo "Cannot connect to database";
    exit();
}
// else
// {
//     echo"connected";
// }