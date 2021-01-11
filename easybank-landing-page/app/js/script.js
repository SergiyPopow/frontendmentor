const bttHamb = document.querySelector('#bttHamb');
const header = document.querySelector('.header');

bttHamb.addEventListener('click', function() {
  if (header.classList.contains('open')) {
    bheader.classList.remove('open');
  } else {
    header.classList.add('open');
  }
} );