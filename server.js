const express = require('express');
const app = express();
const db = require('./db')
module.exports = app;


app.use('/',require('./routes'));


db.sync()
  .then(() => db.seed())

const port = process.env.PORT || 3000;

app.listen(port,() => console.log(`listenig on port ${port}`))
