/* global $ */

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

// WDP190401-19
let stars = document.querySelectorAll('.stars');

const getSiblings = function (elem) {
  let siblings = [];
  let sibling = elem.parentNode.firstChild;

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }

  return siblings;
};

stars.forEach(function (singleRating) {
  singleRating.addEventListener('click', function (event) {
    const elem = event.target;
    let siblings = getSiblings(elem);

    for (let i = 0; i < siblings.length; i++) {
      siblings[i].classList.remove('full');
    }

    if (event.target.classList.contains('full')) {
      event.target.classList.remove('full');
    } else {
      event.target.classList.add('full');
    }
  });
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

/* Carousel RWD */
$(document).ready(function () {
  $('.carousel[data-type="multi"] .carousel-item').each(function () {
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next
      .children(':first-child')
      .clone()
      .appendTo($(this));

    for (var i = 0; i < 2; i++) {
      next = next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }

      next
        .children(':first-child')
        .clone()
        .appendTo($(this));
    }
  });
});

/* Carousel indicators RWD */
$(document).ready(function () {
  $('#blog-carousel').on('slid.bs.carousel', function (e) {
    if ($(window).width() < 768) {
      $('#1').removeClass('hidden');
      $('#3').removeClass('hidden');
      $('#5').removeClass('hidden');
    }
    if ($(window).width() > 768) {
      if ($('#1').hasClass('active')) {
        $('#1').removeClass('active');
        $('#0').addClass('active');
      } else if ($('#3').hasClass('active')) {
        $('#3').removeClass('active');
        $('#2').addClass('active');
      } else if ($('#5').hasClass('active')) {
        $('#5').removeClass('active');
        $('#4').addClass('active');
      }
      $('#1').addClass('hidden');
      $('#3').addClass('hidden');
      $('#5').addClass('hidden');
    }
  });
});
