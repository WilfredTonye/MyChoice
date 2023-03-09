const { Sequelize, DataTypes, where } = require('sequelize');
const { Category } = require('./Categories');

const sequelize = new Sequelize('mychoice', 'postgres', '123456789', {
  host: 'localhost',
  dialect: 'postgres'
});

 sequelize.authenticate()
 .then(_ =>console.log(" connexion reussi"))
 .catch(error => console.log(`impossible de se connecter ${error}`))

  const Product = sequelize.define('Product', {
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_name:{
      type: DataTypes.STRING,
      allowNull:false
    },
    product_surname:{
      type: DataTypes.STRING,
      allowNull:true
    },
    description:{
      type: DataTypes.STRING,
      allowNull:false
    },
    product_image:{
      type: DataTypes.STRING,
      allowNull:true
    },
    quantity:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    country:{
      type: DataTypes.STRING,
      allowNull:false
    },
    price:{
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false

  })

  //sequelize.sync({force: true})
module.exports ={
  Product,where
}
