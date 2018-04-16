<?php
 
	// Importing DBConfig.php file.
	include 'connect.php';
	 
	 // Getting the received JSON into $json variable.
	 $json = file_get_contents('php://input');
	 
	 // decoding the received JSON and store into $obj variable.
	$obj = json_decode($json,true);
	$nama = $obj['nama'];
	$alamat = $obj['alamat'];
	$jenis_makanan = $obj['jenis_makanan'];
	$jumlah = $obj['jumlah'];
	$notlpn = $obj['notlpn'];
	
	 
	 // Creating SQL query and insert the record into MySQL database table.
	$Sql_Query = "
	INSERT INTO `id5425209_pesanan`.`a069_pemesanan` (
  `nama`,
  `alamat`,
  'jenis_makanan',
  `notlpn`,
  `nominal`,


VALUES
  (
    `$nama`,
  `$alamat`,
  'jenis_makanan',
  `$notlpn`,
  `$nominal`,
  )";
	 
	 if(mysqli_query($conn,$Sql_Query)){
			$MSG = 'Data Sudah Disimpan!' ;
			$json = json_encode($MSG);

			 echo $json ;
	 }
	 else{
			$MSG = 'Input gagal!' ;
			$json = json_encode($MSG);

			 echo $json ;
			
	 
	 }
	mysqli_close($con);
	
?>