<?php
// Get form data from request body
$data = json_decode(file_get_contents("php://input"), true);

// Build email message
$message = "Name: " . $data['name'] . "\n";
$message .= "Email: " . $data['email'] . "\n";
$message .= "Message: " . $data['message'] . "\n";

// Send email
$to = "thomas.delpalacio@gmail.com";
$subject = "New message from your website";
$headers = "From: " . $data['name'] . " <" . $data['email'] . ">";
mail($to, $subject, $message, $headers);
?>

