var express = require('express');
var app = express();
const models = require('../models');
const bcrypt = require('bcrypt-nodejs');
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const router = express.Router();

app.set('engine', 'pug');


router.get('/login',(req,res)=>{res.render('log-in.pug')})


router.post('/login',jsonParser, (req, res) => {
  const login = req.body.login;
  const password = req.body.password;
  if (!login || !password) {
    const fields = [];
    if (!login) fields.push('login');
    if (!password) fields.push('password');
    res.json({
      ok: false,
      error: 'Все поля должны быть заполнены!',
      fields
    });
  } else {
    models.User.findOne({login})
      .then(user => {
        if (!user) {
          console.log("Нет такокго логина")
          res.json({
            ok: false,
            error: 'Логин и пароль неверны!',
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
                ok:true,
              });
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
module.exports = router;