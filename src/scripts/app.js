import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

console.log('hello');

const outlinesButtons = document.querySelectorAll('.btn-outline');

outlinesButtons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    button.classList.toggle('active');
  });
});

/*
$("[data-toggle='tooltip']").tooltip();
*/

// gallery sliders

const galleryBoxes = document.querySelectorAll('.tab-pane');
const fadeLayer = document.querySelector('.fade-layer');

galleryBoxes.forEach(function (box) {
  const slider = tns({
    container: box.querySelector('.gallery-slider'),
    gutter: 10,
    slideBy: 3,
    controlsText: ['', ''],
    nav: false,
    responsive: {
      '360': {
        items: 3
      },
      '540': {
        items: 4
      },
      '720': {
        items: 6
      },
      '1000': {
        items: 4
      },
      '1300': {
        items: 6
      }
    }
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
