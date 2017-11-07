var express = require('express');

var path = require('path');

var app = express();
app.use( express.static( path.join(__dirname, 'public') ));

app.get('/', function(req, res) {
    
    res.send('hi');
});

app.listen(3006, function() {
    console.log('Server Started on Port 3006…');
});
