var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

var requireAuth = function(req, res, next){
    console.log('Authentication for' + req.url);
    next();

};

app.all('*', requireAuth);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Example app listening on port 3000!')
});