var express = require('express');
var app = express();
var _ = require('lodash')

app.get('/', (req, res) => {
  res.json({
    vote: '/vote',
    results: '/results',
  })
})

app.get('/vote', function (req, res) {
  res.send('vote');
});

app.get('/results', function (req, res) {
  res.send('results');
});

app.listen(3100);