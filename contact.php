<?php
$myemail  = 'wellness-oase-ruegen@web.de';
//$myemail  = 'tom.scheduikat@gmail.com';

/* Check all form inputs using check_input function */
if (!check_input($_POST['name'])
    || !check_input($_POST['email'])
    || !check_input($_POST['tel'])
    || !check_input($_POST['text'])
    || !check_input($_POST['contact'])
) {
    echo json_encode(array('success' => 'false', 'msg' => 'Bitte überprüfen Sie Ihre Eingaben!'));
    exit();
}
$name = check_input($_POST['name']);
$email    = check_input($_POST['email']);
$Telefon  = check_input($_POST['tel']);
$Kommentar = check_input($_POST['text']);
$contact = check_input($_POST['contact']);
$subject = "Kontaktanfrage Wellness Oase";

$message = "
Eine neue Kontaktanfrage wurde auf www.wellnessaufruegen.de abgeschickt:


Name: $name
E-mail: $email
Telefon: $Telefon

Kontakt über: $contact

Kommentar:
$Kommentar


-----------------------------------------------------------------------------
Bitte nicht auf diese Mail antworten - sie wurde automatisch generiert!
-----------------------------------------------------------------------------
";

$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/plain; charset=UTF-8' . "\r\n";
$headers .= 'From: wellnessaufruegen.de Webmailer' . "\r\n";

/* Send the message using mail() function */
mail($myemail, $subject, $message, $headers);

echo json_encode(array('success' => 'true', 'msg' => 'Erfolgreich abgesendet!'));
exit();
/* Functions we used */
function check_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if (!$data || strlen($data) == 0)
    {
        return false;
    }
    return $data;
}

