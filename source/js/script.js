var navMenu = document.querySelector('.main-navigation__wrapper-top');
var navButton = document.querySelector('.main-navigation__button-close');

navButton.addEventListener('click', function() {
  if (navMenu.classList.contains('main-navigation--closed')) {
    navMenu.classList.remove('main-navigation--closed');
    navMenu.classList.add('main-navigation--opened');
  } else {
    navMenu.classList.add('main-navigation--closed');
    navMenu.classList.remove('main-navigation--opened');
  }
});