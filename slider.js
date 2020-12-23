$(document).ready(function() {
    
    var owl = $(".owl-carousel");
   
    owl.owlCarousel({
        items : 3, 
        margin: 10,
        responsive:{
            0:{
              items:1
            },
            768:{
              items:2
            },
            1024:{
              items:3
            }
          },
        loop: true,
        nav: true

    });

  });

  /* $(".next_button").click(function(){
    owl.trigger("next.owl.carousel");
  });
   
  $(".prev_button").click(function(){
    owl.trigger("prev.owl.carousel");
  }); */