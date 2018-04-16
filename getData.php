<?php
	include_once "connect.php";
	
	$sql = "SELECT * FROM a069_pemesanan";
	$query = mysqli_query($conn, $sql);

	$custemer  = array();
	while ($row = mysqli_fetch_array($query)){
		$custemer[] = $row; 
	}
	echo json_encode($custemer);
	mysqli_close($conn);
?>