
/**************************express session************************************/


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);//this takes session as its parameters

var config = require('./config');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var shopRouter= require('./routes/shopping');
var app = express();

var passport = require('passport');
var authenticate = require('./authenticate');

const mongoose = require('mongoose');


const url = config.mongoUrl;

const connect = mongoose.connect(url);


/****deprecation warning solutions**********/
mongoose.set('useNewUrlParser', true);

mongoose.set('useUnifiedTopology', true);

mongoose.set('useCreateIndex', true);
/**********************************************/




connect.then((db)=>{
	console.log('Connected correctly to the server');
},(err)=>{ console.log(err);});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser('12345-67890-09876-54321'));




app.use(passport.initialize());


app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use(express.static(path.join(__dirname, './public')));/******************************/



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
