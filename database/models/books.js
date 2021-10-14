'use strict';
const { Model
} = require('sequelize');

// import { Model } from 'sequelize'

module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  books.init({
    Title: DataTypes.STRING,
    Author: DataTypes.STRING,
    ReleaseDate: DataTypes.DATE,
    Editorial: DataTypes.STRING,
    Category: DataTypes.STRING,
    Campus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'books',
  });
  return books;
};