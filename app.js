var express = require('express');
const mongoose = require('mongoose');
const path=require('path');
const routes = require('./routes')
const search = routes.search;
const log_in = routes.log_in;
const registration = routes.registration;
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser = bodyParser.json();
const session = require('express-session');
const config = require('./config')
const MongoStore = require('connect-mongo')(session);

const app = express();

app.set('engine', 'pug');


//database
mongoose.Promise = global.Promise;
mongoose.set('debug', config.IS_PRODUCTION);
mongoose.connection
  .on('error', error => console.log(error))
  .on('close', () => console.log('Database connection closed.'))
  .once('open', () => {
    const info = mongoose.connections[0];
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
  });
  mongoose.connect(config.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, function(err,db){});


app.use(
    session({
      secret: config.SESSION_SECRET,
      resave: true,
      saveUninitialized: false,
      store: new MongoStore({
        mongooseConnection: mongoose.connection
      })
    })
  );

  app.all('/',function(req,res){
    const id = req.session.userId;
    const name = req.session.Name;
    const login = req.session.userLogin;
    res.render('index.pug', {
      user:{
      name,
      id,
      login
    }})
  });
app.all('/index',function(req,res){
  const id = req.session.userId;
  const name = req.session.Name;
  const login = req.session.userLogin;
  console.log(id, name, login);
  res.render('index.pug', {
    user:{
    name,
    id,
    login
  }})
});

app.all('/search',search)
app.all('/registration',urlencodedParser,registration)

app.all('/login',jsonParser,log_in);


app.use(express.static(path.join(__dirname,'views')));

  app.listen(config.PORT, () =>
  console.log(`Example app listening on port ${config.PORT}!`)
);

  module.exports = app;