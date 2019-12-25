


























var picker = new Lightpick({
  field: document.getElementById('birthdate'),
  singleDate: true,
  format: "DD.MM.YYYY",
  autoclose: true,
  hideOnBodyClick: true,
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
});

datepicker_move = function datepicker_move() {
  var div_lightpick = document.querySelector('.lightpick');
  div_lightpick.style.left = parseInt(div_lightpick.style.left) - 16 + "px";
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
      console.log(date_moved);
      var div_lightpick = document.querySelector('.lightpick');
      div_lightpick.style.left = parseInt(div_lightpick.style.left) - 16 + "px";
      div_lightpick.style.top = parseInt(div_lightpick.style.top) + 15 + "px";
      console.log(div_lightpick.style.left);
      date_moved = true;
    };
  });
}























