var express = require('express');
var app = express();
var _ = require('lodash')

app.get('/vote', function (req, res) {
  res.send('vote');
});

app.get('/cutekitten', function (req, res) {
  console.log({lodash:_})
  res.send('kitten');
});

app.listen(3100);