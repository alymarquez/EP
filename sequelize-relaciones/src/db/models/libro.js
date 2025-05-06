'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Libro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Libro.belongsTo(models.Autor,{
        foreignKey: 'AutorId'
      })
    }
  }
  Libro.init({
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    genero: DataTypes.STRING,
    AutorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Libro',
  });
  return Libro;
};