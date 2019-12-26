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
    req.session.orderDate = req.body.Date;
    res.json({
      ok:true,
    })
})

router.get('/order',urlencodedParser,(req,res)=>{
  let name ="";
  let login = "";
  let orderDate = req.session.Date;
  let RoomId = req.session.orderRoom;
  if(req.session.userId){
  id = req.session.userId}
  if(req.session.Name){
  name = req.session.Name}
  if(req.session.userLogin){
  login = req.session.userLogin}
  models.Room.findOne({number:RoomId}).then(room =>{
    res.render('order.pug',{
      orderDate,
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
