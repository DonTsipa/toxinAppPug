    var picker = new Lightpick({
        field: document.getElementById('birthdate'),
        singleDate: true,
        format:"DD.MM.YYYY",
        autoclose:true,
        hideOnBodyClick:true,
        footer:true,
        maxDate: moment(),
        locale:{
            buttons: {
              prev: 'arrow_backward',
              next: 'arrow_forward',
              close: '×',
              reset: 'Очистить',
              apply: 'Применить'
            },
    
    },
        onSelect: function(start, end){
            var str = '';
            str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
            str += end ? end.format('Do MMMM YYYY') : '...';
          //  document.getElementById('result-3').innerHTML = str;
        }
    });
    datepicker_move = function(){
      var div_lightpick= document.querySelector('.lightpick');
        div_lightpick.style.left = parseInt(div_lightpick.style.left) -16 + "px";
        div_lightpick.style.top = parseInt(div_lightpick.style.top) +15 + "px";
      }
    document.querySelectorAll('.datepicker__label').forEach(label=>{
      label.addEventListener("click",datepicker_move)
    })
