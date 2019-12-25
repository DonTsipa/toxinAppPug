submitButton = document.querySelector('#register');
submitButton.onclick = async function(e){
    e.preventDefault();

    let data = {
      Email: document.querySelector('#Email').value,
      password: document.querySelector('#password').value,
      name: document.querySelector('#name').value,
      lastName: document.querySelector('#lastName').value,
      sex: document.querySelector('input[name="sex"]:checked').value,
      birthdate: document.querySelector('#birthdate').value,
    };
    let response = await fetch('/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      });
      let result = await response.json();
      console.log(result)

      if(!result.ok){
         errorBlock = document.querySelector('.error');
          if(result.fields){
          result.fields.forEach(field =>{
            error = document.querySelectorAll("input[name="+field+"]");
            error.forEach(element =>{
                parent = element.parentElement
                parent.style = 'border: 1px solid red;';
                element.addEventListener("input",
                e=>{
                element.parentElement.removeAttribute('style');
            },{once:true}) 
            //input не работает на датапикере
            element.addEventListener("click",
            e=>{
            element.parentElement.removeAttribute('style');
            errorBlock.style.display = "none";
        },{once:true}) 
            });
          })
        }
          errorBlock.style.display = "block";
          errorBlock.innerHTML =result.error;      
      } else{
        window.location.href = window.location.origin + '/index';

      }

}

