$(document).ready(function() {
  $('.event-image-slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    variableWidth: true
  });
});