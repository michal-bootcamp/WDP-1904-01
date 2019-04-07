console.log('hello');

const outlinesButtons = document.querySelectorAll('.btn-outline');

outlinesButtons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    button.classList.toggle('active');
let stars = document.querySelectorAll('.stars');

stars.forEach(function (singleRating) {
  singleRating.addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() !== 'span') return;

    if (event.target.classList.contains('full')) {
      event.target.classList.remove('full');
    } else {
      event.target.classList.add('full');
    }
  });
});
