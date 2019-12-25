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
  if(req.body.dateRange){
    DateFrom = req.body.dateRange.split('-')[0]
    DateTo = req.body.dateRange.split('-')[1]
  }
  let smoking = req.body.smoking;
  let pets = req.body.pets;
  let friends = req.body.friends;
  let wide_coridor = req.body.wide_coridor;
  let disabled_assistant = req.body.disabled_assistant;
  let guests = {'numberGuests':req.body.numberGuests,'adults':req.body.adults,'children':req.body.children,'babies':req.body.babies}
  if(smoking) smoking = true;
  if(pets) pets = true;
  if(friends) friend = true;
  if(wide_coridor) wide_coridor = true;
  if(disabled_assistant) disabled_assistant = true;
  //const rooms = findRoom(req.body);
  const facilities =  {'numberFacilities':req.body.numberFacilities,'bedrooms':req.body.bedrooms,'beds':req.body.beds,'bathrooms':req.body.bathrooms}
  // indexes = findRoom([guests, DateFrom,DateTo]);
 const id = req.session.userId;
 const name = req.session.Name;
 const login = req.session.userLogin;
 res.render('search.pug',
  {
    'DateFrom':DateFrom, 'DateTo':DateTo, 'guests':guests,
    'smoking':smoking,'pets':pets,'friends':friends,'wide_coridor':wide_coridor,'disabled_assistant':disabled_assistant,
    user:{
      id,
      login,
      name
    },
    facilities
  });
})
router.get('/search',(req,res)=>{
  res.render(path.join('search.pug'));
});
  module.exports=router;
