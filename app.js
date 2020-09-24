var express = require('express');
const mongoose = require('mongoose');
const path=require('path');
const routes = require('./routes')
const search = routes.search;
const log_in = routes.log_in;
const registration = routes.registration;
const order = routes.order;
const indexRouter = routes.indexRouter;

const bodyParser = require("body-parser");
const session = require('express-session');
const config = require('./config')
const MongoStore = require('connect-mongo')(session);
const createRooms = require('./database/createRooms')
const app = express();

//рендер старниц

app.set("views","app/pages");

//шаблонизатор

app.set('view engine', 'pug');


//database

mongoose.connect(
  config.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
).then(() => {
  console.log('MongoDB connected successfully!');
}).catch((err) => {
  console.log(err);
});

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
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(['/index', '/'], indexRouter);
app.use('/search', search);
app.use('/registration', urlencodedParser, registration);
app.use(['/login', '/logout'], jsonParser, log_in);
app.use('/order', urlencodedParser, order);

/*createRooms({
  replies:145,
  stars:5,
  number:888,
  bedrooms:2,
  beds:2,
  price:9990,
  bathrooms:1,
  children:0,
  babies:0,
  smoking:true,
  friends:true,
  pets:true,
  wide_coridor:true,
  disabled_assistant:false,
  luxe:true,
});*/

  module.exports = app;