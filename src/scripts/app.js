console.log('hello');

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
