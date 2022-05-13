<?php
 
	 
        echo '<script>alert("Inside php")</script>';
		$name = $_POST['name'];
        echo 'Name ' . htmlspecialchars($_POST["name"]) . '!';
		$email = $_POST['email'];
		$message = $_POST['message'];
	    echo 'Email ' . htmlspecialchars($email) . '!';
		$from = 'Demo Contact Form'; 
		$to = 'fbislig@gmail.com'; 
		$subject = 'Message from Contact Demo ';
		
		$body = "From: $name\n E-Mail: $email\n Message:\n $message";

		// Check if name has been entered
		if (!$_POST['name']) {
			$errName = 'Please enter your name';
		}
		
		// Check if email has been entered and is valid
		if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
			$errEmail = 'Please enter a valid email address';
		}
		
		//Check if message has been entered
		if (!$_POST['message']) {
			$errMessage = 'Please enter your message';
		}
		echo 'ErrName ' . htmlspecialchars($errName). '!' ;
        echo 'ErrEmail ' . htmlspecialchars($errEmail) . '!';
        echo 'ErrMessage ' . htmlspecialchars($errMessage) . '!';

// If there are no errors, send the email
if (!$errName && !$errEmail && !$errMessage && !$errHuman) {
	if (mail ($to, $subject, $body, $from)) {
		echo '<script>alert("Thank You! I will be in touch")</script>';
		$result='<div class="alert alert-success">Thank You! I will be in touch</div>';
	} else {
		echo '<script>alert("Sorry there was an error sending your message. Please try again later")</script>';
		$result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
	}
}
	 
?>