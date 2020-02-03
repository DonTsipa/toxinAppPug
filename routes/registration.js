var express = require('express');
var app = require('../app');
const bcrypt = require('bcrypt-nodejs');
const models = require('../models');
const pattern =  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const router = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser = bodyParser.json();

//get
router.get('/registration',(req,res)=>{if(!req.session.userLogin){
  res.render('registration.pug')
}else{
  res.redirect('/index');
}
})

//отправка формы

router.post('/registration',jsonParser,(req,res)=>{
  const name = req.body.name;
  const sex = req.body.sex;
  const lastName = req.body.lastName;
  const birthdate = req.body.birthdate;
  const Email = req.body.Email;
  const password = req.body.password;
  let fieldsErr = [];
  if (!Email || !password || !name || !sex || !lastName || !birthdate) {
    if(!Email)fieldsErr.push("Email");
    if(!password)fieldsErr.push("password") 
    if(!name)fieldsErr.push("name");
    if(!sex)fieldsErr.push("sex");
    if(!lastName)fieldsErr.push("lastName");
    if(!birthdate)fieldsErr.push("birthdate");
    res.json({
      ok: false,
      error: 'Все поля должны быть заполнены',
      fields:fieldsErr,
    });
  } else if (!pattern.test(Email)) {
    fieldsErr.push("Email");
    res.json({
      ok: false,
      error: 'Введите корректный Email',
      fields:fieldsErr,
    });
  }else if(password.length<5){
    fieldsErr.push("password");
    res.json({
      ok: false,
      error: 'Пароль не менее 5 символов',
      fields:fieldsErr,
    })
  }
    else {
    models.User.findOne({login: Email}).then(user => {
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
      } else {
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