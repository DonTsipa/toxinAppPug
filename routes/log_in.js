var express = require('express');
var app = express();
const path=require('path');

app.set('view engine', 'pug');
const router = express.Router();

router.get('/log-in',(req,res)=>{res.render('log-in.pug')})


router.get('/log-in',(req,res)=>{




  res.render('index.pug')

})
module.exports = router;