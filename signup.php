<?php
    include_once "dbh.php";

    $name = mysqli_real_escape_string($connection, $_POST["name"]);
    $email = mysqli_real_escape_string($connection, $_POST["email"]);
    $subject = mysqli_real_escape_string($connection, $_POST["subject"]);
    $message = mysqli_real_escape_string($connection, $_POST["message"]);


    $sql = "INSERT INTO client (name, email, subject, message) VALUES ('$name', '$email', '$subject', '$message');";
    mysqli_query($connection, $sql);

header("Location: contact.html?message=received");

?>