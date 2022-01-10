// NAVIGATION BAR
$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}

//BACK TO TOP BUTTON
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//OWL CAROUSEL ADVERTISEMENT
var carousel = function() {
  $('#advertise .owl-carousel').owlCarousel({
  loop:true,
  autoplay: true,
  margin:0,
  mouseDrag: false,
  touchDrag: true,
  autoHeight:true,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  nav:false,
  autoplayHoverPause: false,
  items: 1,
  navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
  responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:1
    }
  }
  });
};
carousel();

AOS.init();