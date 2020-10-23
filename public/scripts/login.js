
var menu_expand = false;
var menuButton = document.querySelector('.header__menuButton');
var menu = document.querySelector('.header__navigation');
menuButton.addEventListener('click', function () {
  if (menu.classList.contains('header__navigation_active')) {
    menu.classList.remove('header__navigation_active');
    menu_expand = false;
  } else {
    menu.classList.add('header__navigation_active');
    menu_expand = true;
  }
});

















