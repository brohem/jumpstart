$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true,
    speed: 2000,
    cssEase: 'linear'
  });

  var ScrollDistance = 0;

  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - ScrollDistance > 50 ) {
      var NavbarHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + NavbarHeight}, 150);
      ScrollDistance = scrollTop;
    }
    else if (ScrollDistance - scrollTop > 50){
      $('.navbar').animate({top: '0px'}, 150);
      ScrollDistance = scrollTop;
    }
  });
});
