<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$visitor_phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'info@parquesdellitoral.com.ar';

$email_subject = 'Nuevo Mensaje desde la web';

$email_body = "Nombre: $name.\n".
                "Email: $visitor_email.\n".
                "Teléfono: $visitor_phone.\n".
                "Motivo: $subject.\n".
                "Mensaje: $message.\n";

$to = 'grimid.it@gmail.com';

$header = "From: $email_from \r\n";

$header .= "Reply-To: $visitor_email \r\n";

mail($to, $email_subject, $email_body, $header);

header("Location: contacto.html");

?>