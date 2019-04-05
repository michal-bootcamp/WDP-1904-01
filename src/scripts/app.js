console.log('hello');

const outlinesButtons = document.querySelectorAll('.outlines .btn-outline');

outlinesButtons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    button.classList.toggle('active');
  });
});
