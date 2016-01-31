// yolo.

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('lingualmingle.sqlite');
var check;

function login(username, password)
{
    
}

module.exports = {
    login : login
};
