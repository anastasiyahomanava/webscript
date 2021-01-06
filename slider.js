$(document).ready(function () {

  var owl = $(".owl-carousel");

  owl.owlCarousel({
    items: 3,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      }
    },
    loop: true,
    nav: true

  });

  //remove nav and dots on portfolio slider
  $(".owl-nav:eq(1)").remove();
  $(".owl-dots:eq(1)").remove();

  if (document.body.clientWidth <= 768) {
    $(".owl-nav").remove();
  }

  /* $(".next_button").click(function(){
    owl.trigger("next.owl.carousel");
  });

  $(".prev_button").click(function(){
    owl.trigger("prev.owl.carousel");
  }); */

});
