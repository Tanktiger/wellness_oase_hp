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
    <META NAME="Keywords" CONTENT="sonderangebot, wellness, oase, r&uuml;gen, breege, julusruh, kosmetik, heilkreide, romantik, massage, sylke, scheduikat, naturheilpraxis, heilpraktiker, osteopathie, hom&ouml;opathie, reiki, craniosacral, kreide, physiotherapie, dr spiller, craniosacrale therapie, sanddorn, r&uuml;gener heilkreide">
    <META NAME="Description" CONTENT="Eine Übersicht an unseren Sonderangeboten und preislich reduzierten Anwendungen">
    <META NAME="Author" CONTENT="Tom Scheduikat">
    <META NAME="Robots" CONTENT="index,follow">
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Wellness Oase Rügen | Unsere Sonderangebote</title>
    <link href="css/style.css" rel="stylesheet" type="text/css"  media="all" />
    <link href='http://fonts.googleapis.com/css?family=Karla' rel='stylesheet' type='text/css'>
    <script src="js/jquery-2.1.1.min.js"></script>
    <script src="js/responsiveslides.min.js"></script>
    <script>
        $(function () {

            $.ajax({
                method: "GET",
//                url: "http://localhost:8888/app_dev.php/services/get-offers",
                    url: "http://intern.wellnessaufruegen.de/services/get-offers",
                async: true,
                jsonpCallback: 'callback',
                contentType: "application/json",
                dataType: 'jsonp'
            }).done(function( response ) {
                var offerList = $('.offerList');
                if (response.length > 0 && $.isArray(response)) {
                    var text = '';
                    $.each(response, function(key, value) {
                        text += '<h2>' + value.name +' </h2>'
                                + '<span>' +value.description + '</span>'
                                + '<h4>Nur ' + value.newPrice + ' € und nur vom ' + value.start + ' bis ' + value.end + '</h4>';
                    });
                    offerList.empty().append(text);
                } else {
                    offerList.empty().append('<p>Zurzeit sind keine Sonderangebote vorhanden</p>');
                }
            });
        });
    </script>
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
                    <li  class="active"><a href="services.html" title="Wellness-Oase Angebote">Angebote</a></li>
                    <li><a href="gallery.html" title="Wellness-Oase Bildergallerie">Gallerie</a></li>
                    <li><a href="partner.html" title="Wellness-Oase Unsere Partner">Partner</a></li>
                    <li><a href="contact.html" title="Wellness-Oase Kontakt">Kontakt</a></li>
                </ul>
            </div>
            <div class="clear"> </div>
        </div>
    </div>
    <div class="clear"> </div>
    <div class="content">
        <div class="wrap">
            <div class="about">
                <h1>Unsere Sonderangebote</h1>
                <div class="clear"> </div>
                <div class="box">
                    <div class="large-box offerList">
                        <img src="images/lightbox/loading.gif"> Lädt Sonderangebote ...
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
                <p><a href="mailto:wellness-oase-ruegen@web.de" title="Mail versenden">wellness-oase-ruegen@web.de</a></p>
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
</body>
</html>
