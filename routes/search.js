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

router.post('/search',urlencodedParser,(req,res)=>{

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

  const id = req.session.userId;
  const name = req.session.Name;
  const login = req.session.userLogin;

//дополняем (меняем прототип) req.body.

  Object.setPrototypeOf(req.body,defaultobj)

//находим подходящие комнаты и рендерим ответ

  findRoom(req.body).then(correct =>{
    res.render('search.pug',
    {
      correct,
      filters:req.body,
      user:{
        id,
        login,
        name
      },
    });
  });
})

// если переншли по Get

router.get('/search',(req,res)=>{

//дефолтный объект

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


  const id = req.session.userId;
  const name = req.session.Name;
  const login = req.session.userLogin;

  //возвращаем все номера

  models.Room.find({}).then(

//рендерим все по дефолту

    correct =>{
    res.render('search.pug',
    {
      correct,
      filters:defaultobj,
      user:{
        id,
        login,
        name
      },
    });
  });
});
  module.exports=router;
