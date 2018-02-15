const app = require('express').Router()
module.exports = app;
const db = require('../db');
const { Word } = db.models;
const DataType = require('../db/DataType')


app.get('/words',(req, res, next) => {
  Word.findAll()
    .then(words => res.send(words))
    .catch(next)
})

app.get('/words/:id',(req, res, next) => {
  console.log(`req.params.id ${req.params.id}`)
  Word.findById(req.params.id, {
    include: [{
    model: DataType,
    as: 'wordType'
    }]
  })
    .then(word => {
      console.log(`===== ${word.wordType.name}`)
      if(!word) res.status(404).send('KKKKK')
      console.log(`FOUND WORD ${word}`);
      res.send(word);
    }
    )
    .catch(next);
})
