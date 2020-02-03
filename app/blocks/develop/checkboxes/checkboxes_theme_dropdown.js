//Global variables
var CheckboxBox = document.querySelector('.checkboxes_theme_dropdown');
var checboxFocus = undefined;
var CheckboxExpand = CheckboxBox.querySelector('.checkboxes__heading');

//expand
    CheckboxExpand.onclick = function(event){
        CheckboxExpand.querySelector('.material-icons').innerHTML = 'expand_less';
        checkboxes__full = CheckboxBox.querySelector('.checkboxes__full');
        if(checkboxes__full.classList.contains('checkboxes__full_visible')){
            checkboxes__full.classList.remove('checkboxes__full_visible');
            checboxFocus = undefined;
            CheckboxExpand.querySelector('.material-icons').innerHTML = 'expand_more';
        } else{
            if(checboxFocus){
                checboxFocus.querySelector('.checkboxes__full').classList.remove('checkboxes__full_visible');
                CheckboxExpand.querySelector('.material-icons').innerHTML = 'expand_more';
            }
            checkboxes__full.classList.add('checkboxes__full_visible')
            checboxFocus = checkboxes__full.parentElement;
        }        
    }