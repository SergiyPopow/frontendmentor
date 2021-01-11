const bttHamb = document.querySelector('#bttHamb');
const header = document.querySelector('.header');

bttHamb.addEventListener('click', function() {
  if (header.classList.contains('open')) {
    header.classList.remove('open');
  } else {
    header.classList.add('open');
  }
} );