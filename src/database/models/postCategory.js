'use strict';

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      allowNull: false,
      foreignKey: false,
      type: DataTypes.INTEGER
    },
    categoryId: {
      allowNull: false,
      foreignKey: false,
      type: DataTypes.INTEGER
    },
  }, {
    tablename: 'PostCategories',
    timestamps: false,
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategory
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategory
    });
  }

  return PostCategory;
};