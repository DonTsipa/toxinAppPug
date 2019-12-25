//apply and reset
var actions = document.querySelectorAll('.dropdown__footer');
actions.forEach(action =>{
    reset = action.querySelector('.dropdown__reset');
    reset.onclick = function(){
        dropdown_full = action.parentElement;
        less = dropdown_full.querySelectorAll('.dropdown__button_less');
        inputs = dropdown_full.querySelectorAll(".dropdown__input");
        console.log(dropdown_full)
        inputs.forEach(input => input.value=0);
        less.forEach(button=>{
            button.style="opacity:0.25";
        })
    }
})
