var express = require('express');
var app = express();

app.get('/vote', function(req, res){
  res.send('vote');
});

app.get('/cutekitten', function(req, res){
  res.send('kitten');
});

app.listen(3100);