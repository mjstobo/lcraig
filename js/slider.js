$(document).ready(function () {
  $('#slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 400,
    lazyLoad: true,
    arrows:false,
    pauseOnHover: true
  });
});

var mouseSide;

$("#slider").on('mousemove', function (e) {
  if ((e.pageX - this.offsetLeft) < $(this).width() / 2) {
    $(".image").css('cursor', 'url(./fonts/icon-prev.png), auto');
    mouseSide = 1;
  } else {
    $(".image").css('cursor', 'url(./fonts/icon-next.png), auto');
    mouseSide = 0;
  }
});

$("#slider").click(function () {
  if (mouseSide == 1) {
    $(this).slick('slickPrev');
  } else {
    $(this).slick('slickNext');
  }
})