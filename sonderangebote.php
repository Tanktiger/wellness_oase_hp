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
    <div class="header" data-active="nav-services">
        <!-- loaded via js -->
    </div>
    <div class="clear"> </div>
    <div class="content">
        <div class="wrap">
            <div class="about">
                <h1>Unsere Sonderangebote - Wellness Oase Rügen</h1>
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
    </div>
    <div class="clear"> </div>
</div>
<script src="js/main.js"></script>
<script src="js/ga.js"></script>
</body>
</html>
