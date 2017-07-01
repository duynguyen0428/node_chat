var express = require('express');
var path = require('path');

var passport = require('passport');
var localLogin = require('./middlewares/auth/local-passport');
localLogin.initialize();

var app = express();

//connect to database
var mongoose = require('mongoose');

// connect to development database or production database
switch (app.get('env')) {
  case 'development':
    mongoose.connect(require('./config/conf').devDBURI);
    break;
  case 'production':
    mongoose.connect(require('./config/conf').dbURI);
    break;
  default: throw new Error('Unknown execution environment: ' + app.get('env'));
}

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

// view engine setup
app.set('views', path.join(__dirname, './client/app'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

require('./middlewares/utils/utils')(app, express);

require('./routes/routes')(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.redirect('/');
  // next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  // res.render('error');
});

module.exports = app;
