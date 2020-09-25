submitButtonlogin = document.querySelector('#log_in');
submitButtonlogin.onclick = async function(e){
    e.preventDefault();

    let data = {
      login: document.querySelector('#login-Email').value,
      password: document.querySelector('#login-password').value,
    };
    let response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      });
      let result = await response.json();
      console.log(result);
      if(!result.ok){
          result.fields.forEach(field =>{
            error = document.querySelectorAll("input[name="+field+"]");
            error.forEach(element =>{
                parent = element.parentElement
                parent.style = 'border: 1px solid red;';
                element.addEventListener("input",
                e=>{
                console.log(element.parentElement);
                element.parentElement.removeAttribute('style');
                errorBlock.style.display = "none";
            },{once:true}) 
            });
          })
          errorBlock = document.querySelector('.error');

          errorBlock.style.display = "block";
          errorBlock.innerHTML =result.error;
      }else{
      window.location.href = window.location.origin + '/index';
      }
}

