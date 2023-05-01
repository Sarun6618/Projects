<?php
// session_start();
$con=mysqli_connect("localhost","root","","testing");
if(mysqli_connect_error())
{
    echo "Cannot connect to database";
    exit();
}
// else
// {
//     echo"connected";
// }
?>