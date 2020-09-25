const button = document.querySelector('.header__menuButton');
button.addEventListener('click', () => {
  const menu = document.querySelector('.header__navigation');
  if (menu.classList.contains('header__navigation_active')) {
    menu.classList.remove('header__navigation_active')
  } else {
    menu.classList.add('header__navigation_active')
  }
})