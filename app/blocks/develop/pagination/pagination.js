const paginationButtons = document.querySelectorAll('.pagination__button_number');
const pageInput = document.querySelector('#page');
const filtersForm = document.querySelector('#filters');
const active = pageInput.value;
const last = paginationButtons[paginationButtons.length - 1].querySelector('.pagination__number').innerText
const paginationBack = document.querySelector('.pagination__button_back');
const paginationForward = document.querySelector('.pagination__button_forward');

let page = '';

switch (active) {
  case '1':
    paginationButtons[0].classList.add('pagination__button_active');
    break;
  case '2':
    paginationButtons[1].classList.add('pagination__button_active');
    break;
  case (last - 2).toString():
    paginationButtons[1].classList.add('pagination__button_active');
    break;
  case last:
    paginationButtons[3].classList.add('pagination__button_active');
    break;
  default:
    paginationButtons[2].classList.add('pagination__button_active');
    break;
}
if (paginationBack) {
  paginationBack.addEventListener('click', (event) => {
    pageInput.value = active - 1;
    filtersForm.submit()
  });
}

if (paginationForward) {
  paginationForward.addEventListener('click', (event) => {
    pageInput.value = parseInt(active) + 1
    filtersForm.submit()
  });
}


paginationButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (event.target.classList.contains('pagination__number')) {
      page = event.target.innerText
    }
    else {
      page = event.target.querySelector('.pagination__number').innerText
    }
    pageInput.value = page
    filtersForm.submit()
  })
})