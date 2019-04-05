console.log('hello');

// Menu for mobiles

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('.menu').classList.toggle('show');
});
