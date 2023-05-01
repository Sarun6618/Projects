<?php
require("Connection.php");
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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
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
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-12">
                <table class="table text-center table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Phone No</th>
                    <th scope="col">Address</th>
                    <th scope="col">Pay Mode</th>
                    <th scope="col">Orders</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    $query="SELECT * FROM `order_manager`";
                    $user_result=mysqli_query($con,$query);
                    while($user_fetch=mysqli_fetch_assoc($user_result))
                    {
                        echo "
                        <tr>
                            <td>$user_fetch[Order_id]</td>
                            <td>$user_fetch[Full_Name]</td>
                            <td>$user_fetch[Phone_No]</td>
                            <td>$user_fetch[Address]</td>
                            <td>$user_fetch[Pay_Mode]</td>
                            <td>
                                <table class='table text-center table-bordered'>
                                    <thead>
                                        <tr>
                                            <th scope='col'>Item Name</th>
                                            <th scope='col'>Prize</th>
                                            <th scope='col'>Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    ";
                                    $order_query="SELECT * FROM `user_orders` WHERE `Order_id`='$user_fetch[Order_id]'";
                                    $order_result=mysqli_query($con,$order_query);
                                    while($order_fetch=mysqli_fetch_assoc($order_result))
                                    {
                                        echo"
                                        <tr>
                                        <td>$order_fetch[Item_Name]</td>
                                        <td>$order_fetch[Price]</td>
                                        <td>$order_fetch[Quantity]</td>
                                        </tr>";
                                    }
                                    echo"
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    ";
                    }
                    ?>
                    <!-- // <tr>
                    // <td>1</td>
                    // <td>Mark</td>
                    // <td>Otto</td>
                    // <td>@mdo</td>
                    // <td>@mdo</td>
                    // </tr> -->
                </tbody>
                </table>
            </div>
        </div>
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