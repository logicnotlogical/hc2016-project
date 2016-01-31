var fs = require('fs');
var path = require('path');
var https = require('https');

var apiKeys = JSON.parse(fs.readFileSync(path.join(__dirname + '/api_keys.json'), 'utf8'));

var getJSONFromURL = function(url, callback) {
    https.get(url, function(response) {
        var data = '';

        response.on('data', function(chunk) {
            data+=chunk;
        });

        response.on('end', function(err) {
            callback(JSON.parse(data));
        });

        response.on('error', function(err) {
            callback({});
        });
    }).on('error', function(err) {
        console.log('Error with json.');
        console.log(err);
        callback({});
    });
};

var translateText = function(text, lang) {
    getJSONFromURL("https://www.googleapis.com/language/translate/v2?key="+apiKeys.gtranslate+"&target="+lang+"&q="+encodeURIComponent(text), function(data) {
        return data;
    });
};

module.exports = {
    translateText : translateText
};
