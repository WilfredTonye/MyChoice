module.exports = (Sequelize, DataTypes) =>{
  return Sequelize.define('Product', {
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    product_surname:{
      type: DataTypes.STRING,
      allowNull: false
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false
    },
    product_image:{
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    country:{
      type: DataTypes.STRING,
      allowNull: false
    },
    price:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: true

  })
}