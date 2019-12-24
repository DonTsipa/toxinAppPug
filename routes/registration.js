var express = require('express');
var app = express();
const path=require('path');
const bcrypt = require('bcrypt-nodejs');
const models = require('../models');
const pattern =  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

app.set('view engine', 'pug');
const router = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser = bodyParser.json();

//get
router.get('/registration',(req,res)=>{
  res.render('registration.pug');
});

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
    console.log(Email,password,name,sex,lastName,birthdate)
    if(!Email){fieldsErr.push("Email")
  }else if (!pattern.test(Email)) {
    fieldsErr.push("Email");
    }
    if(!password)fieldsErr.push("password");
    if(!name)fieldsErr.push("name");
    if(!sex)fieldsErr.push("sex");
    if(!lastName)fieldsErr.push("lastName");
    if(!birthdate)fieldsErr.push("birthdate");
    res.json({
      ok: false,
      error: 'Все поля должны быть заполнены!',
      fields:fieldsErr,
    });
  } else {
    models.User.findOne({
      Email
    }).then(user => {
      if (!user) {
        bcrypt.hash(password, null, null, (err, hash) => {
          models.User.create({
            name,
            sex,
            Email,
            password: hash,
            birthdate,
            lastName
          })
            .then(user => {
              console.log(user);
              res.render('index.pug')
              
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