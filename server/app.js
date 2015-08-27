var express = require('express');
var path = require('path');
var index = require('./routes/index');

var app = express();

app.use('/', index);

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
    console.log("Listening on port: " + app.get("port"));
});

module.exports = app;

