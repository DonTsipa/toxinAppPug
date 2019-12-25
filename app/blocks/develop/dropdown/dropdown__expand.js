//Global variables
var boxes= document.querySelectorAll('.dropdown');
var focus = undefined;


//expand
document.body.onclick = function (e) {
    var target = e.target;
    if(focus){
        if(!focus.contains(target)){   
            focus.querySelector('.dropdown__full').classList.remove('dropdown__full_visible');
            focus = undefined;
        }  
    }
}

boxes.forEach(box =>{
    var expand= box.querySelector('.cards__input');
    expand.onclick = function(event){
        dropdown__full = box.querySelector('.dropdown__full');
        if(dropdown__full.classList.contains('dropdown__full_visible')){
            dropdown__full.classList.remove('dropdown__full_visible');
            focus = undefined;
        } else{
            if(focus){
                focus.querySelector('.dropdown__full').classList.remove('dropdown__full_visible');
            }
            dropdown__full.classList.add('dropdown__full_visible')
            focus = dropdown__full.parentElement;
        }        
    }
});