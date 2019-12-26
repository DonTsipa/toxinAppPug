let sliders = document.querySelectorAll('.range__slider');
let priceMin = document.getElementById('price-min');
let priceMax = document.getElementById('price-max');
let priceMininput = document.getElementById('range__priceMin');
let priceMaxinput = document.getElementById('range__priceMax');

//let priceMaxinput = 
let white_space = function(str){
    return str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}
sliders.forEach(slider =>{
noUiSlider.create(slider, {
    start: [priceMininput.value, priceMaxinput.value],
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
        priceMaxinput.value =value;
    } else {
        priceMin.innerHTML = white_space(value) +"Р";
        priceMininput.value =value;

    }
});
});
