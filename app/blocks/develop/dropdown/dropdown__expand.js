var boxes= document.querySelectorAll('.dropdown');
clicked=false;
boxes.forEach(box =>{
    expand= box.querySelector('.cards__input');
    expand.onclick = function(event){
        console.log('click');
        if(clicked){
            box.querySelector('.dropdown__full').style="opacity:0;top:0%; z-index:-1;";
            clicked=false;
        } else{ 
            box.querySelector('.dropdown__full').style="opacity:1; top:100%; z-index:10"
            clicked=true;
        }        
    }
});
