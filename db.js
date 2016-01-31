var mongoose = require('mongoose');

var db;

// connect to db.
var dbConnect = function (callback) {
    mongoose.connect('mongodb://localhost/test');
    db = mongoose.connection;
    db.on('error', function(err) {
        console.log('error: '+err);
        callback({status: "error",
            error: err});
    });
    db.once('open', function() {
        callback({status: "success"});
    });
}

var userSchema = mongoose.Schema
(
    {
        username    : String, 
        password    : String,
        firstName   : String,
        lastName    : String,
        email       : String
    }
);

module.exports = {
    dbConnect : dbConnect
}
