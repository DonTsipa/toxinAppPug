var express = require('express');
var app = require('../app')
const models = require('../models');
const bcrypt = require('bcrypt-nodejs');
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

const router = express.Router();
router.post('/order',urlencodedParser,(req,res)=>{
    
    let RoomId = req.body.RoomId;
    req.session.orderRoom = RoomId;
})

router.get('/order',urlencodedParser,(req,res)=>{
  let name ="";
  let login = "";
  if(req.session.userId){
  id = req.session.userId}
  if(req.session.userInamed){
  name = req.session.name}
  if(req.session.login){
  login = req.session.login}
  models.Room.findOne({number:RoomId}).then(room =>{
    res.render('order.pug',{
      room,
        user:{
        id,
        login,
        name
      },
    })
  })
})
module.exports=router;
