var express = require('express');
const app = express();
const path=require('path');
const routes = require('./routes')
const search = routes.search;
const log_in = routes.log_in;
const registration = routes.registration;
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser = bodyParser.json();

app.set('engine', 'pug');

app.all('/'||'/index',function(req,res){
    res.render(path.join(__dirname,'views/index.pug'));
})

app.all('/search',search)
app.all('/registration',urlencodedParser,registration)

app.all('/log-in',jsonParser,log_in);


app.use(express.static(path.join(__dirname,'views')));
//app.use('/', express.static('pages'));

module.exports = app;