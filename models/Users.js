module.exports = (Sequelize, DataTypes) =>{
  return Sequelize.define('User', {
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
}