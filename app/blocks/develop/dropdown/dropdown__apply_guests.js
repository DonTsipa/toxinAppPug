firstGuest = function(x){
    if (x == 0) {return false;}
    else if (x==1){return x+ ' гость'}
    else{
        if (x<5){return x+' гостя'}
        else{return x+' гостей'}
    }
}  
secondGuest = function(x){
    if (x == 0) {return false;}
    else if(x==1){return x + ' ребенок'}
    else {
        if (x<5){return x + ' ребенка'}
        else{return x +' детей'}
    }    
}
thirdGuest = function(x){
    if (x == 0) {return false;}
    else if (x==1){return x + ' младенец'}
    else{
        if (x<5){return x+' младенца'}
        else{return x+' младенцев'}
    }
}    
var applyGuest = document.querySelector('.dropdown__apply_guests');
textChangeGuests = function(){
    expand = applyGuest.parentElement.parentElement.parentElement.querySelector('.cards__input');    
    var inputs = expand.parentElement.querySelectorAll('.dropdown__input')
    var threeDots = false; //многоточие
    text ='';
    if(firstGuest(inputs[0].value)){
        text+=', '+firstGuest(inputs[0].value);
        threeDots = true;
    }
    if(secondGuest(inputs[1].value)){
        text+=', '+secondGuest(inputs[1].value);
        threeDots = true;
    }
    if ((thirdGuest(inputs[2].value))){
        if(!(firstGuest(inputs[0].value) && secondGuest(inputs[1].value))){
        text+=', '+thirdGuest(inputs[2].value);
        threeDots = true;
        }
    }
if(threeDots){
    text+='...'
}
    text = text.substring(1);
    if(text ==''){
        text = 'сколько гостей';
    }
    expand.querySelector('.cards__input-text').value = text;
    console.log("changed!")
}

applyGuest.onclick = function(){
    textChangeGuests();
    expand.onclick();
}
//window.onload =textChangeGuests;
