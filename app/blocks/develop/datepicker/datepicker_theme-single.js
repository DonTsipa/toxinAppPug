if (document.getElementById('datepicker_single')) {

  var picker = new Lightpick({
    field: document.getElementById('datepicker_single'),
    singleDate: false,
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
      },

    },
    onSelect: function (start, end) {
      var str = '';
      str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
      str += end ? end.format('Do MMMM YYYY') : '...';
      //  document.getElementById('result-3').innerHTML = str;
    }
  });
  datepicker_move = () => {
    const div_lightpick = document.querySelector('.lightpick');
    if (parseInt(div_lightpick.style.left.slice(0, -2)) > 16) {
      div_lightpick.style.left = parseInt(div_lightpick.style.left) - 16 + "px";
    } else {
      div_lightpick.style = `left: calc(50% - 160px); top: ${parseInt(div_lightpick.style.top) + 15}px;`
    }
    div_lightpick.style.top = parseInt(div_lightpick.style.top) + 15 + "px";
  }
  document.querySelectorAll('.datepicker__label').forEach(label => {
    label.addEventListener("click", datepicker_move)
  })

};