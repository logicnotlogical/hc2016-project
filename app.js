var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// custom stuffs.

var exphbs = require('express-handlebars');
var hbs = exphbs.create(
    {
       helpers:
       {
           ifEq: function(v1, v2, options)
           {
               if (v1 == v2)
                return options.fn(this);
               return options.inverse(this);
           }
       },
       defaultLayout: 'single',
       extname: '.hbs'
    }
);

// yolo

var routes = require('./routes/routes.js');

var app = express();

// db
// var db = require('./db.js');

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// New setup for handlebars to register the new handler for ifEq

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));

app.use('/', routes);

app.post('/', function(request, response)
{
    if (typeof request.action != 'undefined' && request.action)
    {
        switch(request.action)
        {
            case 'login':
                // Login code
                // Username: request.action.login.username
                // Password: request.action.login.password
                break;
            case 'signup':
                // Signup code
                // First Name: request.action.signup.firstName
                // Last Name: request.action.signup.lastName
                // Email: request.action.signup.email
                // Password: request.action.signup.password
                break;
        }
    }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
//random comment to confused TF out of everyone