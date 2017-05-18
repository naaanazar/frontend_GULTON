$(document).ready(function() {

   $(".owl-carousel").owlCarousel({
         loop: !0,
         margin: 0,
         responsiveClass: !0,
         dotsEach: !0,
         dotData: !0,
         responsive: {
            0: {
               items: 1
            },
            600: {
               items: 1
            },
            1e3: {
               items: 1,
               loop: !1
            }
         }
      })

});
