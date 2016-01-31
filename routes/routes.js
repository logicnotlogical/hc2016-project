var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


/* GET login page */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* GET signup page */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Sign Up' });
});

/* GET users page. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource'); // TODO: make this point at a resource
});

module.exports = router;
