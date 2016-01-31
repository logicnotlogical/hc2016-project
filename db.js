// yolo.

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('lingualmingle.sqlite');
var check;

function login(username, password)
{
    var bcrypt = require('bcrypt'); //function for hashing the password
    bcrypt.genSalt = (10, function(err, salt)
    {
    	bcrypt.hash = (password, salt, function(err, hash)
    	{
    		password = hash;
    	});
    });
    db.run("INSERT INTO lingualmingle(col1, col2) VALUES (password, username)"); //not sure if this is correct(it's meant to be the insert function)
}

module.exports = {
    login : login
};
