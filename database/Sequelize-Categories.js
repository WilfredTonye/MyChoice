const {Sequelize, DataTypes} = require('sequelize');
const CategoriesModel = require('../models/Categories')

const sequelize = new Sequelize('mychoice', 'postgres', '123456789', {
    host: 'localhost',
    dialect: 'postgres'
  });
  sequelize.authenticate()
  .then(_ =>console.log('Connexion reussi'))
  .catch(error => console.log(`Impossible de se connecter a la base de donnees ${error}`))
  
      const category = CategoriesModel(sequelize,DataTypes)
      const initDbCategory = () => {
           sequelize.sync({force: true})
   .then(_ => {
    console.log("Synchonisation reussi")
    category.create({
          category_name:'plat',
          category_type:'ENTREES'
      }).then(plat => console.log(plat.toJSON()))
        console.log("La table Categories a ete initialise")
  })
      }
         module.exports = {
            initDbCategory, category
         }