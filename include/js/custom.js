var $ = jQuery.noConflict();

jQuery(document).ready(function($){


$(".scroll-now").click(function() {

        $('html,body').animate({

                scrollTop: $("#about, #properties").offset().top - 80
            },

            'fast');

    });






/*==========================*/ 
/* sliders */ 
/*==========================*/
if($('.card-slider').length > 0){
jQuery('.card-slider').slick({
  slidesToShow:3,
  slidesToScroll: 1,
  dots: false,
  arrows: false, 
  infinite:true, 
  centerMode: false, 
  responsive: [
    
    {
      breakpoint: 768,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1,
        // adaptiveHeight:true,
      }
    },
    
  ] 
});
}



/*==========================*/ 
/* img-block-slider */ 
/*==========================*/
if($('.img-block-slider').length > 0){
jQuery('.img-block-slider').slick({
  slidesToShow:1,
  slidesToScroll: 1,
  dots: false,
  arrows:true, 
  infinite:true, 
  centerMode:true, 
  prevArrow: $('.arrow-prev'),
  nextArrow: $('.arrow-next') , 
  responsive: [
    
    {
      breakpoint: 768,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1,
        // adaptiveHeight:true,
      }
    },
    
  ] 
});
}



$('.nav-icon').on('click', function() {
  $('body').toggleClass('show-menu'); 
  $('body').toggleClass('overflow-hidden'); 
     
  });


/*==========================*/  
/* Scroll on animate */  
/*==========================*/
function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });
        var osTrigger = ( trigger ) ? trigger : osElement;
        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '95%',
        });
// osElement.removeClass('fadeInUp');
  });
}
onScrollInit( $('.os-animation') );
onScrollInit( $('.staggered-animation'), $('.staggered-animation-container'));


/*==========================*/
/* Header fix */
/*==========================*/
var scroll = $(window).scrollTop();
if (scroll >= 10) {
    $("body").addClass("fixed");
} else {
    $("body").removeClass("fixed");
}


});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $("body").addClass("fixed");
    } else {
        $("body").removeClass("fixed");
    }
});