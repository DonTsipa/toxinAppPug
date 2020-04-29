var express = require('express');
var app = require('../app');
const path=require('path');
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser = bodyParser.json();
const databaseBlock = require('.././database')
const models = require('../models');

//функция поиска комнат

const findRoom = databaseBlock.findRoom;

const router = express.Router();

//получение формы

router.get('/search',urlencodedParser,(req,res)=>{
//объект по дефолту, для дополнения "урезанного" полученного объекта с индекса

  let defaultobj = {
    DateFrom: '',
    DateTo: '',
    smoking: false,
    pets: false,
    friends: false,
    wide_coridor: false,
    disabled_assistant: false,
    numberFacilities: false,
    bedrooms: 0,
    beds:0,
    bathrooms: 0,
    numberGuests: 0,
    adults: 0,
    children: 0,
    babies: 0,
    priceMin: 0,
    priceMax: 20000,
    numberFacilities:"Удобства",
    numberGuests:"Сколько гостей"
  }

  //параметры сессии
let user = {
  id:req.session.userId,
  name:req.session.Name,
  login:req.session.userLogin
}
if(!req.session.userId){
  user = {
    id:'',
    name:'',
    login:'',
  }
} 
  const id = req.session.userId;
  const name = req.session.Name;
  const login = req.session.userLogin;

//дополняем (меняем прототип) req.body.
  Object.setPrototypeOf(req.query,defaultobj)
  if(req.query.dateRange){
  req.query.DateFrom = req.query.dateRange.split('-')[0].trim();
  req.query.DateTo = req.query.dateRange.split('-')[1].trim();
  }
//находим подходящие комнаты и рендерим ответ

  findRoom(req.query).then(correct =>{
    res.render('search.pug',
    {
      correct,
      filters:req.query,
      link:'DateFrom='+req.query.DateFrom+'&DateTo='+req.query.DateTo,
      user:user,
    });
  });
})

module.exports=router;
