var express = require('express');
var app = require('../app')
const models = require('../models');
const bcrypt = require('bcrypt-nodejs');
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

const router = express.Router();

router.get('/order',urlencodedParser,(req,res)=>{
  id = '';
  name='';
  login='';
  if(req.session.userId){
  id = req.session.userId}
  if(req.session.Name){
  name = req.session.Name}
  if(req.session.userLogin){
  login = req.session.userLogin}
  models.Room.findOne({number:req.query.RoomId}).then(room =>{
    res.render('order.pug',{
      orderDate:req.query.DateFrom+' - '+ req.query.DateTo,
      room,
        user:{
        id,
        login,
        name
      },
    })
  })
});
module.exports=router;
