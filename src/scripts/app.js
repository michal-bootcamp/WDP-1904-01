import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

/* eslint-env jquery */

console.log('hello');

// Menu for mobiles

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('.menu').classList.toggle('show');
});

const outlinesButtons = document.querySelectorAll('.btn-outline');

outlinesButtons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    button.classList.toggle('active');
  });
});

// gallery sliders

const galleryBoxes = document.querySelectorAll('.tab-pane');
const fadeLayer = document.querySelector('.fade-layer');

galleryBoxes.forEach(function (box) {
  const slider = tns({
    container: box.querySelector('.gallery-slider'),
    items: 6,
    gutter: 10,
    slideBy: 3,
    controlsText: ['', ''],
    nav: false
  });

  const info = slider.getInfo();

  for (let i = 0; i < info.slideItems.length; i++) {
    info.slideItems[i].addEventListener('click', function (e) {
      for (let n = 0; n < info.slideItems.length; n++) {
        info.slideItems[n].querySelector('.slider-image').classList.remove('active');
      }
      info.slideItems[i].querySelector('.slider-image').classList.add('active');
      const activeImage = box.querySelector('.slider-image.active').style
        .backgroundImage;

      box.querySelector('.image').style.backgroundImage = activeImage;

      // set fade animation

      fadeLayer.classList.add('show-fade');

      setTimeout(function () {
        fadeLayer.style.backgroundColor = 'transparent';
      }, 60);

      setTimeout(function () {
        fadeLayer.style.backgroundColor = '#fff';
        fadeLayer.classList.remove('show-fade');
      }, 200);
    });
  }

  const buttonPrev = box.querySelector("[data-controls='prev']");
  const buttonNext = box.querySelector("[data-controls='next']");

  buttonPrev.classList.add('prev', 'btn-main', 'no-hover');
  buttonPrev.innerHTML = '<i class="fas fa-chevron-left">';
  buttonNext.classList.add('next', 'btn-main', 'no-hover');
  buttonNext.innerHTML = '<i class="fas fa-chevron-right">';
});

$('[data-toggle="tooltip"]').tooltip();

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
