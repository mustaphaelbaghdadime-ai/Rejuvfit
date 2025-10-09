<?php
$conn = new mysqli("localhost", "root", "", "myDatabase");

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "INSERT INTO users (email, password)
        VALUES ( '$email', '$password')";

if ($conn->query($sql) === TRUE) {
  echo "New user added!";
} else {
  echo "Error: " . $conn->error;
}
?>