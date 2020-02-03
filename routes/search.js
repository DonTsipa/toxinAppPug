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
  let numberFacilities = req.body.numberFacilities;
  let bedrooms = req.body.bedrooms;
  let beds = req.body.beds;
  let bathrooms = req.body.bathrooms;
  let numberGuests = req.body.numberGuests;
  let adults = req.body.adults
  let children = req.body.children
  let babies = req.body.babies
  let priceMin = req.body.range__priceMin
  let priceMax = req.body.range__priceMax
  const id = req.session.userId;
  const name = req.session.Name;
  const login = req.session.userLogin;
  if(!numberFacilities)numberFacilities="Удобства";
  if(!bedrooms)bedrooms=0
  if(!beds)beds=0
  if(!bathrooms)bathrooms=0
  if(!numberGuests)numberGuests="Сколько гостей";
  if(!adults)adults=0
  if(!children)children=0
  if(!babies)babies=0

  if(!priceMax)priceMin = 0;
  priceMax = req.body.range__priceMax
  if(!priceMax)priceMax = 20000;

  if(req.body.dateRange){
    DateFrom = req.body.dateRange.split('-')[0]
    DateTo = req.body.dateRange.split('-')[1]
  }
  if(!DateFrom){DateFrom = ""}
  if(!DateTo){DateTo = ""}
  if(smoking) smoking = true;
  if(pets) pets = true;
  if(friends) friend = true;
  if(wide_coridor) wide_coridor = true;
  if(disabled_assistant) disabled_assistant = true;

  let range ={priceMin,priceMax,} 
  let facilities =  {numberFacilities,bedrooms,beds,bathrooms}
  let guests =  {numberGuests,adults,children,babies}

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
  const DateFrom = "";
  const DateTo = "";
  const id = req.session.userId;
  const name = req.session.Name;
  const login = req.session.userLogin;
  const smoking  = true;
  const pets  = true;
  const friends  = true;
  const wide_coridor  = true;
  const disabled_assistant = true;
  const range={priceMin:0, priceMax:20000}
  const facilities = {numberFacilities:"Удобства",bedrooms:0, beds:0,bathrooms:0};
  const guests = {numberGuests:"Сколько гостей",adults:0, children:0,babies:0};
  findRoom({DateFrom,DateTo,smoking,pets,friends,wide_coridor,disabled_assistant,guests,range,facilities}).then(
    correct =>{
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
});
  module.exports=router;
