/* global $ */

console.log('hello');

const outlinesButtons = document.querySelectorAll('.btn-outline');

outlinesButtons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    button.classList.toggle('active');
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
  $('#blog-carousel').on('slid.bs.carousel', function (e) {
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
      }
    }
    if ($(window).width() < 768) {
      $('#1').removeClass('hidden');
      $('#3').removeClass('hidden');
      $('#5').removeClass('hidden');
    }
  });
});
