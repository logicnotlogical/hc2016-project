// yolo.

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('lingualmingle.sqlite');
var bcrypt = require('bcrypt'); //function for hashing the password
var check;
var username;
var password;

var express = require("express");

app.post('/', function(req, res)
{
	res.send('username:' + req.body.username);
	res.send('password:' + req.body.password);

	 username = req.body.username;
	 password = req.body.password;
}


function login(username, password)
{
    bcrypt.genSalt = (10, function(err, salt)
            {
                bcrypt.hash = (password, salt, function(err, hash)
                        {
                            password = hash;
                        });
            });
    db.run("INSERT INTO lingualmingle(col1, col2) VALUES (password, username)"); //not sure if this is correct(it's meant to be the insert function)
}

function signup(user, callback) {
    // check that the required fields are present.
    if (user.username != null && user.password != null && user.email != null && user.firstName != null) {
        var language = user.language : "en"; // defaults to english.
        bcrypt.genSalt = (10, function(err, salt) {
            bcrypt.hash(user.password, 8, function(err, hash) {
                db.run("INSERT INTO users (Email, FirstName, 
    }
    else callback(false);
};

module.exports = {
    login : login
};
