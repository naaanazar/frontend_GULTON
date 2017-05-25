var options = [

    {selector: '.image-test', offset: 500, callback: function(el) {
        Materialize.fadeInImage($(el));
    } },

    {selector: '.activate_bounceInDown', offset: 500, callback: function(el) {
        $('.activate_bounceInDown').addClass('animated bounceInDown');
        $('.activate_bounceInDown').css('opacity','1')
    }},

    {selector: '.activate_zoomIn', offset: 500, callback: function(el) {
        $('.activate_zoomIn').addClass('animated zoomIn');
        $('.activate_zoomIn').css('opacity','1')
    }}
];
Materialize.scrollFire(options);

$(document).ready(function() {
    $('.activate_zoomIn').on('hover', function () {
        $('.activate_zoomIn').addClass('animated zoomIn');
    });
});

