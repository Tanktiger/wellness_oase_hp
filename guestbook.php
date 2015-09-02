<?php
$conn = mysqli_connect('localhost', 'root', '', 'wellness_oase');
$result = null;
if ($conn) {
    $conn->set_charset('utf8');
    $sql = 'SELECT * FROM guestbook';
    $result = $conn->query($sql);
}
?>
<!DOCTYPE HTML>
<!--
Author: W3layouts
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
-->
<html lang="de">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link href="images/favicon.png" rel="icon" type="image/x-icon" />
    <META NAME="Keywords" CONTENT="wellness, oase, r&uuml;gen, breege, julusruh, kosmetik, heilkreide, romantik, massage, sylke, scheduikat, naturheilpraxis, heilpraktiker, osteopathie, hom&ouml;opathie, reiki, craniosacral, kreide, physiotherapie, dr spiller, craniosacrale therapie, sanddorn, r&uuml;gener heilkreide">
    <META NAME="Description" CONTENT="Entspannen und wohlf&uuml;hlen in der Wellness Oase auf R&uuml;gen. Das Motto von Heilpraktikerin Sylke Scheduikat lautet 'Es ist immer der Mensch der wichtigste, den wir gerade behandeln'.">
    <META NAME="Author" CONTENT="Tom Scheduikat">
    <META NAME="Robots" CONTENT="index,follow">
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Wellness-Oase Rügen | Kontaktieren Sie uns wenn Sie Fragen haben oder einen Termin vereinbaren wollen</title>
    <link href="css/style.css" rel="stylesheet" type="text/css"  media="all" />
    <link href='http://fonts.googleapis.com/css?family=Karla' rel='stylesheet' type='text/css'>
    <script src="js/jquery-2.1.1.min.js"></script>
</head>
<body>
<div id="wrapper">
    <div class="header">
        <div class="wrap">
            <div class="logo">
                <a href="index.html" title="Wellness Oase - Startseite">
                    <img src="images/logo_small.png" title="Wellness Oase Rügen - Sylke Scheduikat" alt="Wellness Oase Rügen - Sylke Scheduikat"/>
                </a>
            </div>
            <div class="top-nav">
                <ul>
                    <li><a href="index.html" title="Wellness-Oase Startseite">Start</a></li>
                    <li><a href="about.html" title="Wellness-Oase Über die Praxis">&Uuml;ber</a></li>
                    <li><a href="services.html" title="Wellness-Oase Angebote">Angebote</a></li>
                    <li><a href="gallery.html" title="Wellness-Oase Bildergallerie">Gallerie</a></li>
                    <li><a href="partner.html" title="Wellness-Oase Unsere Partner">Partner</a></li>
                    <li class="active"><a href="contact.html" title="Wellness-Oase Kontakt">Kontakt</a></li>
                </ul>
            </div>
            <div class="clear"> </div>
        </div>
    </div>
    <div class="clear"> </div>
    <div class="content">
        <div class="wrap">
            <div class="guestbook">
                <h1>Gästebuch</h1>
                <div class="box">
                    <div class="large-box">
                        <div class="contact-form">
                            <h2>Sagen Sie uns wie es Ihnen gefallen hat!</h2>
                            <form method="post" action="javascript:;">
                                <div>
                                    <span><label>Name</label></span>
                                    <span><input class="userName textbox" name="userName" type="text"></span>
                                </div>
                                <div>
                                    <span><label>E-Mail</label></span>
                                    <span><input class="userEmail textbox" name="userEmail" type="text" ></span>
                                </div>
                                <div>
                                    <span><label>Kurze Bewertung</label></span>
                                    <span><input class="userShort textbox" name="userShort" type="text" ></span>
                                </div>
                                <div>
                                    <span><label>Ausführliche Bewertung</label></span>
                                    <span><textarea class="userMsg" name="userMsg"> </textarea></span>
                                </div>
                                <div>
                                    <div class="rating">
                                        <img src="images/rating_on.png" title="Bewertungsangabe" alt="Bewertungsangabe">
                                        <img src="images/rating_on.png" title="Bewertungsangabe" alt="Bewertungsangabe">
                                        <img src="images/rating_on.png" title="Bewertungsangabe" alt="Bewertungsangabe">
                                        <img src="images/rating_off.png" title="Bewertungsangabe" alt="Bewertungsangabe">
                                        <img src="images/rating_off.png" title="Bewertungsangabe" alt="Bewertungsangabe">
                                    </div>
                                </div>
                                <div>
                                    <span><input id="submitGuestbook" type="submit" value="Abschicken"></span>
                                </div>
                            </form>
                            <div class="statusMsg hide"></div>
                        </div>
                        <div class="clear"> </div>
                    </div>
                    <div class="large-box guestbookEntries">
                        <?php if (isset($result)) { ?>
                            <?php while($row = $result->fetch_assoc()) { ?>
                                <?php $starHtml = ''; ?>
                                <?php for ($i = 1; $i <= $row['rating']; $i++) {
                                        $starHtml .= ' <img src="images/rating_on.png" title="Bewertungsangabe" alt="Bewertungsangabe">';
                                    } ?>
                                <div class="large-inner-box">
                                    <h5>&nbsp;<?php echo $row['short']; ?></h5>
                                    <span><?php echo $starHtml; ?></span>
                                    <p>&nbsp;-&nbsp;<?php echo $row['name']; ?></p>
                                    <p><?php echo $row['text']; ?></p>
                                </div>';
                             <?php } ?>
                        <?php }//endif ?>
                        <div class="clear"> </div>
                    </div>
                    <div class="clear"> </div>
                </div>
            </div>
        </div>
    </div>
    <div class="clear"> </div>
    <div class="footer">
        <div class="wrap">
            <div class="footer-left">
                <p>Wittower Stra&szlig;e 7 &CenterDot; 18556 Juliusruh</p>
                <p>038391 &frasl; 935675</p>
                <p>Ge&ouml;ffnet von Mo.- Sa. von 10 bis 20 Uhr</p>
            </div>
            <div class="footer-right">
                <p><a href="mailto:wellnessaufruegen@web.de" title="Mail versenden">wellnessaufruegen@web.de</a></p>
                <p>
                    <small>
                        <a href="index.html" title="Startseite">Startseite</a> |
                        <a href="impressum.html" title="Impressum">Impressum</a> |
                        <a href="partner.html" title="Partner">Partner</a> |
                        <a href="contact.html" title="Kontakt">Kontakt</a> |
                        <a href="sitemap.html" title="Sitemap">Sitemap</a>
                    </small>
                </p>
                <p><small>Basic Design by <a href="http://w3layouts.com/" title="W3layouts">W3layouts</a></small></p>
            </div>
            <div class="clear"> </div>
        </div>
    </div>
</div>
<script src="js/ga.js"></script>
<script type="application/javascript">
    $(document).ready(function() {
        $('.rating img').on('mouseover', function() {
            $(this).attr('src',"images/rating_on.png").addClass('active');
            $(this).prevAll().attr('src',"images/rating_on.png").addClass('active');
            $(this).nextAll().attr('src',"images/rating_off.png").removeClass('active');
        });
        $('#submitGuestbook').on('click', function(e) {
            e.preventDefault();
            $( ".statusMsg").empty();
            $('#submitGuestbook').attr('disabled', 'disabled');
            var nameInput = $('form .userName');
            var mailInput = $('form .userEmail');
            var shortInput = $('form .userShort');
            var textInput = $('form .userMsg');

            nameInput.removeClass('redBorder').addClass('greenBorder');
            mailInput.removeClass('redBorder').addClass('greenBorder');
            shortInput.removeClass('redBorder').addClass('greenBorder');
            textInput.removeClass('redBorder').addClass('greenBorder');

            var name = nameInput.val();
            var email = mailInput.val();
            var short = shortInput.val();
            var text = textInput.val();
            var rating = $('.rating .active').size();
            if ((name != '' && name != ' ')
                && (email != '' && email != ' ')
                && (short != '' && short != ' ')
                && (text != '' && text != ' ')
            ){
                var request = $.ajax({
                    url: "guestbook_handler.php",
                    type: "POST",
                    data: {
                        name : name,
                        email: email,
                        short: short,
                        text: text,
                        rating: rating
                    },
                    dataType: "json"
                });

                request.done(function( response ) {
                    $( ".statusMsg" ).html( response.msg );
                    $('#submitGuestbook').removeAttr('disabled');
                    _gaq.push(['_trackEvent', 'Guestbook', 'Add', name, email]);
                    if (response.success == "true") {
                        var starHtml = '';
                        for (var i = 1; i <= response.data.rating; i++ ) {
                            starHtml += '<img src="images/rating_on.png" title="Bewertungsangabe" alt="Bewertungsangabe">';
                        }
                        var newEntry = '<div class="large-inner-box"><h5>' +
                            response.data.short+'</h5>' +
                            '<span>'+starHtml+'</span>' +
                            '<p> - '+response.data.name+'</p>' +
                            '<p>'+response.data.text+'</p>' +
                            '</div>';
                        $('.guestbookEntries').append(newEntry);
                    }
                });

                request.fail(function( jqXHR, textStatus ) {
                    alert( "Die Anfrage ist fehlgeschlagen: " + textStatus );
                    $('#submitGuestbook').removeAttr('disabled');
                });
            } else {
                if (name == '' || name == ' ') nameInput.removeClass('greenBorder').addClass('redBorder');
                if (email == '' || email == ' ') mailInput.removeClass('greenBorder').addClass('redBorder');
                if (short == '' || short == ' ') shortInput.removeClass('greenBorder').addClass('redBorder');
                if (text == '' || text == ' ') textInput.removeClass('greenBorder').addClass('redBorder');
                $('#submitGuestbook').removeAttr('disabled');
            }

        });
    });
</script>

</body>
</html>