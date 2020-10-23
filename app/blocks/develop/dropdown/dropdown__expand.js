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
    if(menu_expand){
        if((!menu.contains(target)) && (!menuButton.contains(target)) && !(menuButton == target)){ 
            menu.classList.remove('header__navigation_active');
            menu_expand = false;
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