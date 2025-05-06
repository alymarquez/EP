'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Autor.hasMany(models.Libro,{
        foreignKey: 'AutorId'
      })
    }
  }
  Autor.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fechaNacimiento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Autor',
  });
  return Autor;
};