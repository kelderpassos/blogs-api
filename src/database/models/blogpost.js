'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BlogPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BlogPost.init({
    title: DataTypes.STRING,
    contente: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    update: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'BlogPost',
  });
  return BlogPost;
};