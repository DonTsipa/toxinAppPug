let menu_expand = false;
const menuButton = document.querySelector('.header__menuButton');
const menu = document.querySelector('.header__navigation');
menuButton.addEventListener('click', () => {
  if (menu.classList.contains('header__navigation_active')) {
    menu.classList.remove('header__navigation_active')
    menu_expand = false;
  } else {
    menu.classList.add('header__navigation_active')
    menu_expand = true;
  }
})

