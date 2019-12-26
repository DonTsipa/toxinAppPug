var express = require('express');
var app = require('../app');
const path=require('path');
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser = bodyParser.json();
//const Rooom = require('./models/room');
const databaseBlock = require('.././database')

const findRoom = databaseBlock.findRoom;
const router = express.Router();

router.post('/search',urlencodedParser,(req,res)=>{


  let DateFrom = req.body.indexDatefrom;
  let DateTo = req.body.indexDateto;
  let smoking = req.body.smoking;
  let pets = req.body.pets;
  let friends = req.body.friends;
  let wide_coridor = req.body.wide_coridor;
  let disabled_assistant = req.body.disabled_assistant;
  let guests = {'numberGuests':req.body.numberGuests,'adults':req.body.adults,'children':req.body.children,'babies':req.body.babies}
  let facilities =  {'numberFacilities':req.body.numberFacilities,'bedrooms':req.body.bedrooms,'beds':req.body.beds,'bathrooms':req.body.bathrooms}
  let range ={
    priceMin: req.body.range__priceMin,
    priceMax: req.body.range__priceMax
  } 
  const id = req.session.userId;
  const name = req.session.Name;
  const login = req.session.userLogin;
  if(req.body.dateRange){
    DateFrom = req.body.dateRange.split('-')[0]
    DateTo = req.body.dateRange.split('-')[1]
  }
  if(smoking) smoking = true;
  if(pets) pets = true;
  if(friends) friend = true;
  if(wide_coridor) wide_coridor = true;
  if(disabled_assistant) disabled_assistant = true;
  if(!range){range={priceMin:0,priceMax:20000}}
  if(!facilities){facilities = {numberFacilities:"Удобства",bedrooms:0, beds:0,bathrooms:0}};
  if(!guests){guests = {numberGuests:"Сколько гостей",adults:0, children:0,babies:0}};
  findRoom({DateFrom,DateTo,smoking,pets,friends,wide_coridor,disabled_assistant,guests,range,facilities}).then(correct =>{
    res.render('search.pug',
    {
      correct,
      DateFrom, DateTo, guests,
      smoking,pets,friends,wide_coridor,disabled_assistant,
      user:{
        id,
        login,
        name
      },
      facilities, range
    });
  });
  

})
router.get('/search',(req,res)=>{
  const smoking  = true;
  const pets  = true;
  const friends  = true;
  const wide_coridor  = true;
  const disabled_assistant = true;
  const range={priceMin:0,priceMax:20000}
  const facilities = {numberFacilities:"Удобства",bedrooms:0, beds:0,bathrooms:0};
  const guests = {numberGuests:"Сколько гостей",adults:0, children:0,babies:0};
  findRoom({DateFrom,DateTo,smoking,pets,friends,wide_coridor,disabled_assistant,guests,range,facilities}).then(
    correct =>{
    console.log(correct);
    res.render('search.pug',
    {
      correct,
      DateFrom, DateTo, guests,
      smoking,pets,friends,wide_coridor,disabled_assistant,
      user:{
        id,
        login,
        name
      },
      facilities, range
    });
  });
  res.render(path.join('search.pug'));
});
  module.exports=router;
