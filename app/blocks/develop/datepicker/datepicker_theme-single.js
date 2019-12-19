if(document.getElementById('datepicker_single')){

var picker = new Lightpick({
    field: document.getElementById('datepicker_single'),
    singleDate: false,
    format:"DD.MM.YYYY",
    autoclose:false,
    footer:true,
    minDate: moment(),
    maxDate: moment().add(1,'year'),
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
})
//Костылище :D
document.querySelectorAll('.datapicker__label').forEach(label=> label.onclick=function(){
  console.log(date_moved);
    var div_lightpick= document.querySelector('.lightpick');
    div_lightpick.style.left = parseInt(div_lightpick.style.left) -16 + "px";
    div_lightpick.style.top = parseInt(div_lightpick.style.top) +15 + "px";
    console.log(div_lightpick.style.left);
    date_moved = true;
    
})
};