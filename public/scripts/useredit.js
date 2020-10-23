
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











var picker = new Lightpick({
  field: document.getElementById('birthdate'),
  singleDate: true,
  format: "DD.MM.YYYY",
  autoclose: true,
  hideOnBodyClick: true,
  footer: true,
  maxDate: moment(),
  locale: {
    buttons: {
      prev: 'arrow_backward',
      next: 'arrow_forward',
      close: '×',
      reset: 'Очистить',
      apply: 'Применить'
    }
  },
  onSelect: function onSelect(start, end) {
    var str = '';
    str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
    str += end ? end.format('Do MMMM YYYY') : '...'; //  document.getElementById('result-3').innerHTML = str;
  }
});

datepicker_move = function datepicker_move() {
  var div_lightpick = document.querySelector('.lightpick');

  if (parseInt(div_lightpick.style.left.slice(0, -2)) > 16) {
    div_lightpick.style.left = parseInt(div_lightpick.style.left) - 16 + "px";
  } else {
    div_lightpick.style = "left: calc(50% - 160px); top: ".concat(parseInt(div_lightpick.style.top) + 15, "px;");
  }

  div_lightpick.style.top = parseInt(div_lightpick.style.top) + 15 + "px";
};

document.querySelectorAll('.datepicker__label').forEach(function (label) {
  label.addEventListener("click", datepicker_move);
});
var date_moved = false;

if (document.getElementById('date-from')) {
  var picker = new Lightpick({
    field: document.getElementById('date-from'),
    secondField: document.getElementById('date-to'),
    singleDate: false,
    format: "DD.MM.YYYY",
    autoclose: false,
    footer: true,
    minDate: moment(),
    maxDate: moment().add(1, 'year'),
    locale: {
      buttons: {
        prev: 'arrow_backward',
        next: 'arrow_forward',
        close: '×',
        reset: 'Очистить',
        apply: 'Применить'
      }
    },
    onSelect: function onSelect(start, end) {
      var str = '';
      str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
      str += end ? end.format('Do MMMM YYYY') : '...'; //  document.getElementById('result-3').innerHTML = str;
    }
  }); //Костылище :D

  document.querySelectorAll('.cards__date-label').forEach(function (label) {
    return label.onclick = function () {
      var div_lightpick = document.querySelector('.lightpick');

      if (parseInt(div_lightpick.style.left.slice(0, -2)) > 16) {
        div_lightpick.style.left = parseInt(div_lightpick.style.left) - 16 + "px";
      } else {
        div_lightpick.style = "left: calc(50% - 160px); top: ".concat(parseInt(div_lightpick.style.top) + 15, "px;");
      }

      div_lightpick.style.top = parseInt(div_lightpick.style.top) + 15 + "px";
      date_moved = true;
    };
  });
}





