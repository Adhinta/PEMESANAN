<?php
$servername = "mhs.rey1024.com"; 
$username = "u7039630_appmhs";
$password = "c4reOk"; 
$dbname = "u7039630_appmhs";
 
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname); 
// Check connection
if (!$conn) { 
    die("Connection failed: " . mysqli_connect_error());
}else{
	//echo "Koneksi berhasil";
} 
?> 