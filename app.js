var express = require('express');
const mongoose = require('mongoose');
const path=require('path');
const routes = require('./routes')
const {
  indexRouter,
  order,
  registration,
  login,
  search,
} = routes;
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
app.use(express.static(path.join(__dirname, 'dist')));


app.use('/search', search);
app.use('/registration', registration);
app.use(['/login', '/logout'], login);
app.use('/order', order);
app.use(['/index', '/'], indexRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/*createRooms();*/

  module.exports = app;