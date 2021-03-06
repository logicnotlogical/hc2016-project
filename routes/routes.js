var express = require('express');
var router = express.Router();
var requests = require('../requests.js');

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

/* GET chat page */
router.get('/chat', function(req, res, next) {
    res.render('chat', { title: 'Chat' });
});

router.get('/translate', function(req,res,next) {
    res.send(requests.translateText(req.query.text,req.query.lang));
});

module.exports = router;
