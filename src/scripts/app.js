console.log('hello');


// Menu for mobiles

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('.menu').classList.toggle('show');

  
  
const outlinesButtons = document.querySelectorAll('.btn-outline');

outlinesButtons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    button.classList.toggle('active');
  });
});
