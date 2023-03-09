const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('mychoice', 'postgres', '123456789', {
  host: 'localhost',
  dialect: 'postgres'
});
const Country = sequelize.define('Countrie', {
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    country_name:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
      timestamps: false,
      createdAt: false,
      updatedAt: false
      
  })
  // sequelize.sync({force: true})
module.exports = {
  Country
}