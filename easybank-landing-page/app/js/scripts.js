const bttHamb = document.querySelector('#bttHamb');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadings = document.querySelectorAll('.fading');
const body = document.querySelector('body');
bttHamb.addEventListener('click', function() {
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    body.classList.remove('.noscroll');
    fadings.forEach(function(element){
      element.classList.remove('f-in');
      element.classList.add('f-out');
    });
    
  } else {
    body.classList.add('.noscroll');
    header.classList.add('open');
    fadings.forEach(function(element){
      element.classList.remove('f-out');
      element.classList.add('f-in');
    });
    
  }
} );