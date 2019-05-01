/* global $ */

/* Touchscreen ability */
$(document).ready(function () {
  var touchSensitivity = 5;
  $('.carousel').on('touchstart', function (event) {
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one('touchmove', function (event) {
      var xMove = event.originalEvent.touches[0].pageX;
      if (Math.floor(xClick - xMove) > touchSensitivity) {
        $(this).carousel('next');
      } else if (Math.floor(xClick - xMove) < -touchSensitivity) {
        $(this).carousel('prev');
      }
    });
    $('.carousel').on('touchend', function () {
      $(this).off('touchmove');
    });
  });
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
  $('#carousel').on('slid.bs.carousel', function (e) {
    if ($(window).width() > 992) {
      if ($('#1').hasClass('active')) {
        $('#1').removeClass('active');
        $('#0').addClass('active');
      } else if ($('#3').hasClass('active')) {
        $('#3').removeClass('active');
        $('#2').addClass('active');
      } else if ($('#5').hasClass('active')) {
        $('#5').removeClass('active');
        $('#4').addClass('active');
      } else if ($('#7').hasClass('active')) {
        $('#7').removeClass('active');
        $('#6').addClass('active');
      }
    }
    if ($(window).width() < 992) {
      if ($('#1').hasClass('active')) {
        $('#1').removeClass('active');
        $('#0').addClass('active');
      } else if ($('#3').hasClass('active')) {
        $('#3').removeClass('active');
        $('#2').addClass('active');
      } else if ($('#5').hasClass('active')) {
        $('#5').removeClass('active');
        $('#4').addClass('active');
      } else if ($('#7').hasClass('active')) {
        $('#7').removeClass('active');
        $('#6').addClass('active');
      }
    }
    if ($(window).width() < 576) {
      $('#1').removeClass('hidden');
      $('#3').removeClass('hidden');
      $('#5').removeClass('hidden');
      $('#7').removeClass('hidden');
    }
  });
});


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
