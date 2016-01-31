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
    };
}

module.exports = {
    dbConnect : dbConnect
}
