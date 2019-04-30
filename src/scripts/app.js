/* eslint-env jquery */

console.log('hello');

const outlinesButtons = document.querySelectorAll('.btn-outline');

outlinesButtons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    button.classList.toggle('active');
  });
});

// Brands slider

$(document).ready(function () {
  $('.brands').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: false,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$('.left').click(function () {
  $('.brands').slick('slickPrev');
});

$('.right').click(function () {
  $('.brands').slick('slickNext');
});
