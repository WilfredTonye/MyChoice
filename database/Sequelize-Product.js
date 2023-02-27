const {Sequelize, DataTypes} = require('sequelize');
const ProductModel = require('../models/Product');

const sequelize = new Sequelize('mychoice', 'postgres', '123456789', {
    host: 'localhost',
    dialect: 'postgres'
  });
  sequelize.authenticate()
  .then(_ =>console.log('Connexion reussi'))
  .catch(error => console.log(`Impossible de se connecter a la base de donnees ${error}`))

    const product = ProductModel(sequelize,DataTypes)
    const initDbProduct = () => {
       sequelize.sync({force: true})
   .then(_ => {
    console.log("Synchonisation reussi")
    product.create({
          product_name:'Canard Laqué de Pékin',
          product_surname:'',
          description:'description du plat',
          product_image: 'Canard Laqué de Pékin.jpg',
          quantity: 20,
          country: 'Chine',
          price: 5000
      }).then(CanardLaquédePékin => console.log(CanardLaquédePékin.toJSON()))
         console.log("La table Products a ete initialise")
  })
}
   module.exports = {
    initDbProduct,product
   }