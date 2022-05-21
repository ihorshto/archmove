$(function () {

 $('.slider__inner').slick({
  prevArrow: '<button type="button" class="slick-prev"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8V6H4L8 2L7 0L0 7L7 14L8 12L4 8H16Z" fill="#FD665E"/></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8V6H12L8 2L9 0L16 7L9 14L8 12L12 8H0Z" fill="#FD665E"/></svg></button>',
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
 });

});