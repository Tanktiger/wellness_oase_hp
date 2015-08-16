<?php
/* Check all form inputs using check_input function */
if (!check_input($_POST['name'])
    || !check_input($_POST['email'])
    || !check_input($_POST['short'])
    || !check_input($_POST['text'])
    || !check_input($_POST['rating'])
) {
    echo json_encode(array('success' => 'false', 'msg' => 'Bitte überprüfen Sie Ihre Eingaben! Alle Felder müssen ausgefüllt werden'));
    exit();
}
$name = check_input($_POST['name']);
$email    = check_input($_POST['email']);
$short  = check_input($_POST['short']);
$text = check_input($_POST['text']);
$rating = check_input($_POST['rating']);

$conn = mysqli_connect('localhost', 'root', '', 'wellness_oase');
if ($conn) {
    $conn->set_charset('utf8');
    $sql = 'INSERT INTO guestbook (name, email, short, text, rating)
        VALUES ("'.$name.'", "'.$email.'", "'.$short.'", "'.$text.'", '.$rating.')';
    $conn->query($sql);
} else {
    echo json_encode(array('success' => 'false', 'msg' => 'Der Eintrag konnte nicht gespeichert werden! Bitte probieren Sie es später erneut.'));
    exit();
}
$data = array('name' => $name,
    'email' => $email,
    'short' => $short,
    'text' => $text,
    'rating' => $rating);
echo json_encode(array('success' => 'true', 'msg' => 'Erfolgreich gespeichert!', 'data' => $data));
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

