const conn = require('./conn');
const { Sequelize } = conn;

const Word = conn.define('word',{
  name:{
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true
    }
  }

},{
  getterMethods: {
    case: function(){
      return this.name.toUpperCase();
    }
  }
})


module.exports = Word;
