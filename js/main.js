var header = $( ".header" );
header.load('header.html', function() {
    header.find('li.' + header.data('active')).addClass('active');
}) ;
$( ".footer" ).load('footer.html') ;

$(document).on('ready', function() {
    //resizeDivs();
});

$( window ).resize(function() {
    //resizeDivs();
});

function resizeDivs() {
    $.each($('div.section'), function(key, section){
        var maxHeight = 0;
        $.each($(section).find('div.images_1_of_3'), function(key2, column) {
            if ($(column).height() > maxHeight) {
                maxHeight = $(column).height();
            }
        });
        $(section).find('div.images_1_of_3').height(maxHeight + 'px');
    });
}