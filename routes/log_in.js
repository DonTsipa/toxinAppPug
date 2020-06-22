var express = require('express');
var app = require('../app')
const models = require('../models');
const bcrypt = require('bcrypt-nodejs');
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const router = express.Router();



router.get('/login',(req,res)=>{if(!req.session.userLogin){
  res.render('log-in.pug')
}else{
  res.redirect('/index');
}
})

router.post('/login',jsonParser, (req, res) => {
   
const login = req.body.login;
const password = req.body.password;

//функция проверки полей на заполненность


  let checkFields = (fields) =>{
    let fieldsErr = [];
    for(let prop in fields){
      if (!fields[prop]){
        fieldsErr.push(prop);
        }
    };
    return fieldsErr;
  }

//Проверка полей на заполненность

  let fieldsErr = checkFields(req.body);
  
  if (fieldsErr.length){
    res.json({
      ok: false,
      error:'Все поля должны быть заполнены',
      fields:fieldsErr,
    }); 
  } else {
    models.User.findOne({login})
      .then(user => {
        if (!user) {
          res.json({
            ok: false,
            error: 'Такого логина нет!',
            fields: ['login', 'password']
          });
        } else {
          bcrypt.compare(password, user.password, function(err, result) {
            if (!result) {
              res.json({
                ok: false,
                error: 'Логин и пароль неверны!',
                fields: ['login', 'password']
              });
            } else {
              req.session.Name = user.name + " " + user.lastName;
              req.session.userId = user.id;
              req.session.userLogin = user.login;
              res.json({
                ok: true,
              })
            }
          });
        }
      })
      .catch(err => {
        console.log(err);
        res.json({
          ok: false,
          error: 'Ошибка, попробуйте позже!'
        });
      });
    }
});
router.all('/logout', function (req, res) {
  // Удалить сессию
  if (req.session) {
    req.session.destroy(() => console.log('You exited!'));
  }
  res.redirect('/index');
});

module.exports = router;