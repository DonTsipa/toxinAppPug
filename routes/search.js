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
  const numberGuests = req.body.numberGuests;
  const guests = {'numberGuests':numberGuests,'adults':req.body.adults,'children':req.body.children,'babies':req.body.babies}
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
