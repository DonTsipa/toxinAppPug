const button = document.querySelector('.header__filtersButton');
const rooms = document.querySelector('.rooms')
const main = document.querySelector('.main_theme-search')
button.addEventListener('click', () => {
  const filters = document.querySelector('.filters_theme-search');
  if (filters.classList.contains('filters_theme-search_active')) {
    filters.classList.remove('filters_theme-search_active')
    rooms.classList.remove('rooms_disable')
    main.style="0";
  } else {
    filters.classList.add('filters_theme-search_active')
    rooms.classList.add('rooms_disable')
    main.style="max-height:100vh";
  }
})