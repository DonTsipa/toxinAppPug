var firstFacility = function(x){
    if (x == 0) {return false;}
    else if (x==1){return x+ ' спальня'}
    else{
        if (x<5){return x+' спальни'}
        else{return x+' спальн'}
    }
}  
var secondFacility = function(x){
    if (x == 0) {return false;}
    else if(x==1){return x + ' кровать'}
    else {
        if (x<5){return x + ' кровати'}
        else{return x +' кроватей'}
    }    
}
var thirdFacility = function(x){
    if (x == 0) {return false;}
    else if (x==1){return x + ' ванная комната'}
    else{
        if (x<5){return x+' ванных комнаты'}
        else{return x+' ванных комнат'}
    }
}    
var applyFacility = document.querySelector('.dropdown__apply_facilities');


textChange = function(){
    expand = applyFacility.parentElement.parentElement.parentElement.querySelector('.cards__input');    
    var inputs = expand.parentElement.querySelectorAll('.dropdown__input')
    var threeDots = false; //многоточие
    text ='';
    if(firstFacility(inputs[0].value)){
        text+=', '+firstFacility(inputs[0].value);
        threeDots = true;
    }
    if(secondFacility(inputs[1].value)){
        text+=', '+secondFacility(inputs[1].value);
        threeDots = true;
    }
    if ((thirdFacility(inputs[2].value))){
        if(!(firstFacility(inputs[0].value) && secondFacility(inputs[1].value))){
        text+=', '+thirdFacility(inputs[2].value);
        threeDots = true;
        }
    }
if(threeDots){
    text+='...'
}
    text = text.substring(1);
    if(text ==''){
        text = 'удобства';
    }
    expand.querySelector('.cards__input-text').value = text;
}
applyFacility.onclick = function(){
    textChange();
    expand.onclick();
}
//window.onload =textChange;
