<?php
function random_num($length){

    $text = "";

    if($length < 5){
        $length = 5;
    }

    $len = rand(4,$length);


    for ($i=0; $i < $len; $i++){
        $text .= rand(0,9);
    }
    return $text;
}

// $con = your connection here 


$user_name = $_POST['user_name'];
$password = $_POST['password'];
$user_id = random_num(20);
// check if username exists

$query = "select * from users where user_name = '$user_name' limit 1";
$check_name_res = mysqli_query($con, $query);

if ($user_name != mysqli_fetch_assoc($check_name_res)['user_name'])
{
    $query = "INSERT INTO users (user_id, user_name, password) VALUES ('$user_id', '$user_name','$password')";

    $res = mysqli_query($con, $query);
    
    if($res){
        echo "Contact saved successfully";
    }
    else
    {
        echo "Some error";	
    }
    
    header("location: login.html");
    die;
}
else{
    echo "username exists. please enter a new one";
}

?>