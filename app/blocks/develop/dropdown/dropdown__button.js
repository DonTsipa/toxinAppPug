var more = document.querySelectorAll(".dropdown__button_more");
var less = document.querySelectorAll(".dropdown__button_less");
console.log(more);
more.forEach(button => {
    button.onclick = function(event){
        val = button.parentElement.querySelector(".dropdown__input").value++;
        button.parentElement.querySelector(".dropdown__button_less").style="opacity:1"
    }
});
less.forEach(button => {
    button.onclick = function(event){
        val = button.parentElement.querySelector(".dropdown__input").value;
        if(val>0){
            button.parentElement.querySelector(".dropdown__input").value--;
            val--;
        }
        val == 0 ? button.style="opacity:0.25": button.style="opacity:1";
    }
});