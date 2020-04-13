<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
header('Access-Control-Allow-Credentials: true');

$msg = $_GET['formMessage'];
$msg = wordwrap($msg,70);

$headers = array(
  'From: "'.$_GET['formSender'].'" <'.$_GET['formEmail'].'>' ,  
  'X-Mailer: PHP/' . phpversion() ,
  'MIME-Version: 1.0' ,
  'Content-type: text/html; charset=utf-8'
);
$headers = implode( "\r\n" , $headers );

$subject = mb_encode_mimeheader("Wiadomość od Tomek Prokop (99FOTO.PL)","UTF-8");


// send email
$result = mail("tomasz@99foto.pl",$subject,$msg, $headers);

if($result) {	
	$data = [ 'mailSent' => '1'];
	header('Content-type: application/json');
	echo json_encode( $data );
}
?>