const conn = require('./conn');
const { Sequelize } = conn;
const Word = require('./Words')

const DataType = conn.define('dataType',{
  name: {
    type: Sequelize.STRING
  }
})

Word.belongsTo(DataType, {as: 'wordType'});

module.exports = DataType;
