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
  const DateFrom = req.body.indexDatefrom;
  const DateTo = req.body.indexDateto;
  if(req.body.dateRange){
    DateFrom = req.body.dateRange.split('-')[0]
    DateTo = req.body.dateRange.split('-')[1]
  }
  const smoking = req.body.smoking;
  const pets = req.body.pets;
  const friends = req.body.friends;
  const wide_coridor = req.body.wide_coridor;
  const disabled_assistant = req.body.disabled_assistant;
  const guests = {'numberGuests':req.body.numberGuests,'adults':req.body.adults,'children':req.body.children,'babies':req.body.babies}
  //const rooms = findRoom(req.body);
  const facilities =  {'numberFacilities':req.body.numberFacilities,'bedrooms':req.body.bedrooms,'beds':req.body.beds,'bathrooms':req.body.bathrooms}
  
 
  // indexes = findRoom([guests, DateFrom,DateTo]);
 const id = req.session.userId;
 const name = req.session.Name;
 const login = req.session.userLogin;
 res.render('search.pug',
  {
    'DateFrom':DateFrom, 'DateTo':DateTo, 'guests':guests,
    user:{
      id,
      login,
      name
    }

  });
})
router.get('/search',(req,res)=>{
  res.render(path.join('search.pug'));
});
  module.exports=router;
