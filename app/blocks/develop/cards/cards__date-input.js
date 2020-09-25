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
      },

    },
    onSelect: function (start, end) {
      var str = '';
      str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
      str += end ? end.format('Do MMMM YYYY') : '...';
      //  document.getElementById('result-3').innerHTML = str;
    }
  });
  //Костылище :D
  document.querySelectorAll('.cards__date-label').forEach(label => label.onclick = function () {
    const div_lightpick = document.querySelector('.lightpick');
    if (parseInt(div_lightpick.style.left.slice(0,-2)) > 16) {
      div_lightpick.style.left = parseInt(div_lightpick.style.left) - 16 + "px";
    } else {
      div_lightpick.style = `left: calc(50% - 160px); top: ${parseInt(div_lightpick.style.top) + 15}px;`
    }
      div_lightpick.style.top = parseInt(div_lightpick.style.top) + 15 + "px";
      date_moved = true;
  })
}
