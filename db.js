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
    db.run()
}

module.exports = {
    //
};
