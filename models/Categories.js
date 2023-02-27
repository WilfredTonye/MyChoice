module.exports = (Sequelize, DataTypes) =>{
  return Sequelize.define('Categorie', {
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    category_name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    category_type:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: true

  })
}