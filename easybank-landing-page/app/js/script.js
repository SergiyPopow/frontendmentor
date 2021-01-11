const bttHamb = document.querySelector('#bttHamb');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

bttHamb.addEventListener('click', function() {
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    overlay.classList.remove('f-in');
    overlay.classList.add('f-out');
  } else {
    header.classList.add('open');
    overlay.classList.remove('f-out');
    overlay.classList.add('f-in');
  }
} );