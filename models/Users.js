const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('mychoice', 'postgres', '123456789', {
  host: 'localhost',
  dialect: 'postgres'
});

   const User = sequelize.define('User', {
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    age:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false
    },
    mobile:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false

  })
 //sequelize.sync({force: true})
  module.exports ={
    User
  }