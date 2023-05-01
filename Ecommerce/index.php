<?php include("header.php");
session_start();
// session_destroy();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
</head>
<body>
    <!-- <?php print_r($_SESSION['cart']) ?> -->
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-3">
                <form action="manage_cart.php" method="POST">
                    <div class="card">
                        <img src="./images/31Ri-FAMBUL._AC_SY400_.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5 class="card-title">Ear Buds</h5>
                            <p class="card-text">Price:3000</p>
                            <button type="submit" name="Add_To_Cart" class="btn btn-primary">Add to cart</button>
                            <input type="hidden" name="Item_Name" value="EarBuds">
                            <input type="hidden" name="Price" value="3000">
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-lg-3">
                <form action="manage_cart.php" method="POST">
                    <div class="card">
                        <img src="./images/PC_CategoryCard_758X608_1._SY608_CB614835787_.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5 class="card-title">Fossil Watch</h5>
                            <p class="card-text">Price:10000</p>
                            <button type="submit" name="Add_To_Cart" class="btn btn-primary">Add to cart</button>
                            <input type="hidden" name="Item_Name" value="Fossil Watch">
                            <input type="hidden" name="Price" value="10000">
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-lg-3">
                <form action="manage_cart.php" method="POST">
                    <div class="card">
                        <img src="./images/MayART_T2_PC_CC_1X._SY304_CB590948482_.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5 class="card-title">Great Sale</h5>
                            <p class="card-text">Price:5000</p>
                            <button type="submit" name="Add_To_Cart" class="btn btn-primary">Add to cart</button>
                            <input type="hidden" name="Item_Name" value="Great Sale">
                            <input type="hidden" name="Price" value="5000">
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-lg-3">
                <form action="manage_cart.php" method="POST">
                    <div class="card">
                        <img src="./images/978x900._SS900_QL85_.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5 class="card-title">Honor Laptop</h5>
                            <p class="card-text">Price:48990</p>
                            <button type="submit" name="Add_To_Cart" class="btn btn-primary">Add to cart</button>
                            <input type="hidden" name="Item_Name" value="Honor Laptop">
                            <input type="hidden" name="Price" value="48990">
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-lg-3">
                <form action="manage_cart.php" method="POST">
                    <div class="card">
                        <img src="./images/978x900._SS900_QL85_.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5 class="card-title">MagicBook</h5>
                            <p class="card-text">Price:48000</p>
                            <button type="submit" name="Add_To_Cart" class="btn btn-primary">Add to cart</button>
                            <input type="hidden" name="Item_Name" value="MagicBook">
                            <input type="hidden" name="Price" value="48000">
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-lg-3">
                <form action="manage_cart.php" method="POST">
                    <div class="card">
                        <img src="./images/talk-2-pro-978x900-2._SS900_QL85_.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5 class="card-title">FireBoltt</h5>
                            <p class="card-text">Price:1499</p>
                            <button type="submit" name="Add_To_Cart" class="btn btn-primary">Add to cart</button>
                            <input type="hidden" name="Item_Name" value="FireBoltt">
                            <input type="hidden" name="Price" value="1499">
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-lg-3">
                <form action="manage_cart.php" method="POST">
                    <div class="card">
                        <img src="./images/Ultra_3_03_-_978x900._SS900_QL85_.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5 class="card-title">Noise Watch</h5>
                            <p class="card-text">Price:3000</p>
                            <button type="submit" name="Add_To_Cart" class="btn btn-primary">Add to cart</button>
                            <input type="hidden" name="Item_Name" value="Noise Watch">
                            <input type="hidden" name="Price" value="3000">
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-lg-3">
                <form action="manage_cart.php" method="POST">
                    <div class="card">
                        <img src="./images/978x900_4._CB594785993_.gif" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5 class="card-title">Boat Ear Buds</h5>
                            <p class="card-text">Price:4000</p>
                            <button type="submit" name="Add_To_Cart" class="btn btn-primary">Add to cart</button>
                            <input type="hidden" name="Item_Name" value="Boat Ear Buds">
                            <input type="hidden" name="Price" value="4000">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>