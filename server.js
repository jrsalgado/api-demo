const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb://db/kittens');

const voteSchema = new mongoose.Schema({
  kittenId: String,
  votes: Number
})

const Votes = mongoose.model('Votes', voteSchema);

const app = express();

app.use('/', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.json({
    vote: '/vote',
    results: '/results',
  })
})

app.get('/vote', function (req, res) {
  const kittenId = req.query.kittenId
  if (!kittenId) return res.status(500).send('error')

  Votes.findOneAndUpdate(
    { kittenId },
    { '$inc': { votes: 1 } },
    { upsert: true, new: true },
    (err, vote) => {
      if (err) return res.status(500).send('error')
      res.json(vote);
    })
})

app.get('/results', function (req, res) {
  Votes.find({}, (err, votes) => {
    if (err) {
      res.status(500).send('error');
    } else {
      res.json(votes)
    }
  })
})

app.listen(3100)

