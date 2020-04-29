var express = require('express');
var app = require('../app');
const bcrypt = require('bcrypt-nodejs');
const models = require('../models');


//проверка Email

const pattern =  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const router = express.Router();
const bodyParser = require("body-parser");

//парсить будем Json

const jsonParser = bodyParser.json();

//get

router.get('/registration',(req,res)=>{
  if(!req.session.userLogin){
  res.render('registration.pug')
}else{
  res.redirect('/index');
}
})

//отправка формы

router.post('/registration',jsonParser,(req,res)=>{
 let checkFields = (fields) =>{
    let fieldsErr = [];
    for(let prop in fields){
      if (!fields[prop]){
        fieldsErr.push(prop);
        }
    };
    return fieldsErr;
  }
  
  const Email = req.body.Email;
  const password = req.body.password;

  //проверка на заполненность полей

  let fieldsErr = checkFields(req.body);
  if(fieldsErr){
    res.json({
      ok: false,
      error:'Все поля должны быть заполнены',
      fields:fieldsErr,
    });
  } 

  //проверка на верность email

  else if (!pattern.test(Email)) {
    fieldsErr.push("Email");
    res.json({
      ok: false,
      error: 'Введите корректный Email',
      fields:fieldsErr,
    });
  }

    //проверка на верность пароля

  else if(password.length<5){
    fieldsErr.push("password");
    res.json({
      ok: false,
      error: 'Пароль не менее 5 символов',
      fields:fieldsErr,
    })
  }

  //в случае верных полей

    else {

    // поиск юзера с таким же логином

    models.User.findOne({login: Email}).then(user => {

      // если такого юзера не обнаружено - создаем

      if (!user) {
        bcrypt.hash(password, null, null, (err, hash) => {
          models.User.create({
            name,
            sex,
            login:Email,
            password:hash,
            birthdate,
            lastName
          })

          //начинаем сессию с новым пользователем
          
            .then(user => {
              req.session.Name = user.name + " " + user.lastName;
              req.session.userId = user.id;
              req.session.userLogin = user.login;
              res.json({
                ok:true
              });
            })
            .catch(err => {
              console.log(err);
              res.json({
                ok: false,
                error: 'Ошибка, попробуйте позже!'
              });
            });
        });
      }

      //Если email занят

       else 
       {
        res.json({
          ok: false,
          error: 'Имя занято!',
          fields: ['Email']
        });
      }
    });
  }
})

module.exports = router;