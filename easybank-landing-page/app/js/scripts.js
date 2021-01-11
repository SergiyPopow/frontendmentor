const bttHamb = document.querySelector('#bttHamb');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadings = document.querySelectorAll('.fading');
bttHamb.addEventListener('click', function() {
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    overlay.classList.remove('f-in');
    overlay.classList.add('f-out');
  } else {
    header.classList.add('open');
    fadings.forEach(function(element){
      element.classList.remove('f-out');
      element.classList.add('f-in');
    });
    
  }
} );