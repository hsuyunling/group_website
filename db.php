<?php
    $conn = new mysqli("localhost", "root", "", "test");
    //  jdbc:mysql://140.119.19.73:3315/；
    // qhvaw

    if ($conn->connect_error) {
        die("連線失敗: " . $conn->connect_error);
    }

    $id = $_POST["id"]; // 學號
    $email = $_POST["email"];
    $phoneNumber = $_POST["phone"];
    $userName = $_POST["name"]; 
    $nickName = $_POST["nick"];
    $psw = $_POST["psw"];
    $gender = $_POST["gender"];
    $sql = "INSERT INTO personData (`id`,`email`,`phone_number`,`name`,`nickName`,`password`,`gender`) 
    VALUES ('$id', '$email', '$phoneNumber', '$userName', '$nickName','$psw', '$gender')";

    if ($conn->query($sql) === TRUE) {
echo "儲存成功 🎉，2 秒後自動跳轉...";
echo "<script>
        setTimeout(function() {
            window.location.href = 'login.html';
        }, 2000);
      </script>";
    } else {
      echo "錯誤: " . $conn->error;
    }
    $conn->close();
    
    
    // db位置：http://localhost/phpmyadmin
    // web位置：http://localhost/test.php
?>

