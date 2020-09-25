var express = require('express');
var app = require('../app')
const models = require('../models');
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

const router = express.Router();

router.get('/',urlencodedParser,(req,res)=>{
  let user = {
    id:req.session.userId,
    name:req.session.Name,
    login:req.session.userLogin
  }
  if(!req.session.userId){
    user = {
      id:'',
      name:'',
      login:'',
    }
  } 
  models.Room.findOne({number:req.query.RoomId}).then(room =>{
    res.render('order',{
      orderDate:req.query.DateFrom+' - '+ req.query.DateTo,
      room,
        user:user,
    })
  })
});
module.exports=router;
