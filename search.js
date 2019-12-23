var express = require('express');
var app = express();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
const path=require('path');
app.set('view engine', 'pug');

const router = express.Router();

router.post('/search',(req,res)=>{
  console.log(req.body)
  DateFrom = req.body.indexDatefrom;
  DateTo = req.body.indexDateto;
  numberGuests = req.body.numberGuests;
  if(numberGuests.length ==0){
    numberGuests = "Сколько гостей";
  }
  guests = {'numberGuests':numberGuests,'adults':req.body.adults,'children':req.body.children,'babies':req.body.babies}
  //res.send([`${DateFrom} - ${DateTo}`,guests]);
  res.render(path.join(__dirname,'dist/search.pug'),{'DateFrom':DateFrom, 'DateTo':DateTo, 'guests':guests});
})

module.exports=router;
