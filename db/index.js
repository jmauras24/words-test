const conn = require('./conn');
const Word = require('./Words');
const DataType = require('./DataType');

const sync = () => {
  return conn.sync({force: true});
}

const data = [{name: 'the'},
{name: 'apple'},
{name: 'running'},
{name: 'climbing'},
{name: 'table'}]

const seed = () => {
  let noun;
  return Promise.all([
    DataType.create({name: 'noun'}),
    DataType.create({ name: 'verb' })
    ])
    .then((_nouns) => {
      console.log(`_nouns ${_nouns}`);
      return Promise.all(data.map(w => Word.create(w)));
      }
    )
    .then(words => {
      console.log(`---> ${words} ${words.length}`);
      words.forEach(w => {
        if(w.name.slice(-3) === 'ing'){
          w.setWordType(2)
        } else {
        w.setWordType(1)
        }
      })

      return Promise.resolve();
    }
    )

}


module.exports = {
  sync,
  seed,
  models:{
    Word
  }

}
