$(function () {
    //http://responsiveslides.com/


//    $.ajax({
//        method: "GET",
////                    url: "http://localhost:8888/app_dev.php/services/get-offers",
//        url: "http://intern.wellnessaufruegen.de/services/get-offers",
//        async: true,
//        jsonpCallback: 'callback',
//        contentType: "application/json",
//        dataType: 'jsonp'
//    }).done(function( response ) {
//        var offers = $('#offers');
//        offers.find('.loading').hide();
//        if (response.length > 0 && $.isArray(response)) {
//            var text = '';
//            $.each(response, function(key, value) {
//                text += '<a href="sonderangebote.php" class="singleoffer">'
//                    + value.name + ' nur ' + value.newPrice + ' €</a>';
////                            text += '<a href="#" class="singleoffer" data-name="'+value.name+'"'
////                                                                + 'data-description="'+value.description+'"'
////                                                                + 'data-newprice="'+value.newPrice+'"'
////                                                                + 'data-oldprice="'+value.oldPrice+'"'
////                                                                + 'data-start="'+value.start+'"'
////                                                                + 'data-end="'+value.end+'" >'
////                            + value.name + ' nur ' + value.newPrice + ' €</a>';
//                if ((key + 1) < response.length) {
//                    text += ' - ';
//                }
//            });
//            offers.find('h3').append(text).show();
//        } else {
//            offers.hide();
//        }
//        offers.find('.loading').hide();
//    });
});