const {Sequelize, DataTypes} = require('sequelize');
const UserModel = require('../models/Users')

const sequelize = new Sequelize('mychoice', 'postgres', '123456789', {
    host: 'localhost',
    dialect: 'postgres'
  });
  sequelize.authenticate()
  .then(_ =>console.log('Connexion reussi'))
  .catch(error => console.log(`Impossible de se connecter a la base de donnees ${error}`))
     const users = UserModel(sequelize,DataTypes)
  const initDbUser = () => {
       sequelize.sync({force: true})
   .then(_ => {
    console.log("Synchonisation reussi")
    users.create({
          name:'Wilfred',
          age:20,
          email:'willfredtonye003@gmail.com',
          password: '123456789',
          mobile: 677364422
      }).then(Arnold => console.log(Arnold.toJSON()))
        console.log("La table Users a ete initialise")
  })
  }
  
  module.exports = {
    initDbUser,users
  }