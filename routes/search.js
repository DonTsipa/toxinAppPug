var express = require('express');
var app = express();
const path=require('path');
//const Rooom = require('./models/room');
const databaseBlock = require('.././database')

const findRoom = databaseBlock.findRoom;
app.set('view engine', 'pug');
const router = express.Router();

router.post('/search',(req,res)=>{
  DateFrom = req.body.indexDatefrom;
  DateTo = req.body.indexDateto;
  numberGuests = req.body.numberGuests;
  guests = {'numberGuests':numberGuests,'adults':req.body.adults,'children':req.body.children,'babies':req.body.babies}
 // indexes = findRoom([guests, DateFrom,DateTo]);
  res.render('search.pug',{'DateFrom':DateFrom, 'DateTo':DateTo, 'guests':guests});
})
router.get('/search',(req,res)=>{
  res.render(path.join('search.pug'));
});
  module.exports=router;
