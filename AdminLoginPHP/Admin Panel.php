<?php
session_start();
// session_destroy();
session_regenerate_id(true);
if(!isset($_SESSION['AdminLoginId']))
{
    header("location: Admin Login.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body{
            margin:0;
        }
        div.header{
            color:#f0f0f0;
            font-family:poppins;
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;
            padding:0 60px;
            background-color:#1c1c1e;
        }
        div.header button
        {
            background-color:#f0f0f0;
            font-size:16px;
            font-weight:550;
            padding:8px 12px;
            border:2px solid balck;
            border-radius:5px;
        }
        </style>
    <title>Admin Panel</title>
</head>
<body>
    <div class="header">
        <h1>ADMIN PANEL-<?php echo $_SESSION['AdminLoginId']?></h1>
        <form action="<?php echo $_SESSION['PHP_SELF']?>" method="POST">
    <button type="submit" name="Logout">LOG OUT</button></form>
    </div>
    <?php
    if(isset($_POST['Logout']))
    {
        session_destroy();
        header("location:Admin Login.php");
    }
    ?>
</body>
</html>