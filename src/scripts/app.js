console.log('hello');
/*
var touchSensitivity = 5;
$('.carousel').on('touchstart', function(event) {
  var xClick = event.originalEvent.touches[0].pageX;
  $(this).one('touchmove', function(event) {
    var xMove = event.originalEvent.touches[0].pageX;
    if (Math.floor(xClick - xMove) > touchSensitivity) {
      $(this).carousel('next');
    } else if (Math.floor(xClick - xMove) < -touchSensitivity) {
      $(this).carousel('prev');
    }
  });
  $('.carousel').on('touchend', function() {
    $(this).off('touchmove');
  });
});
*/
/*
$('.carousel[data-type="multi"] .item').each(function() {
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
*/
