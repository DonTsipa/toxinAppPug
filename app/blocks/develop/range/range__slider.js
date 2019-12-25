var sliders = document.querySelectorAll('.range__slider');
var priceMin = document.getElementById('price-min');

var white_space = function(str){
    return str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}
var priceMax = document.getElementById('price-max');
sliders.forEach(slider =>{
noUiSlider.create(slider, {
    start: [0, 20000],
    connect: true,
    step: 500,
    range: {
        'min': 0,
        'max': 20000
    }
});
slider.noUiSlider.on('update', function (values, handle) {
    value = Math.round(values[handle])
    if (handle) {
        priceMax.innerHTML = white_space(value) +"Р";
    } else {
        priceMin.innerHTML = white_space(value) +"Р";
    }
});
});
