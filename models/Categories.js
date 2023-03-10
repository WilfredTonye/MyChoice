const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('mychoice', 'postgres', '123456789', {
  host: 'localhost',
  dialect: 'postgres'
});
const Category = sequelize.define('Categorie', {
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    category_name:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:"Le nom d'une categorie ne peut pas etre vide",
        notNull:"Ce champ est obligatoire, Veuillez le renseigner!"
      }
    },
    category_type:{
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
      timestamps: false,
      createdAt: false,
      updatedAt: false
      
  })
  // sequelize.sync({force: true})
module.exports = {
  Category
}