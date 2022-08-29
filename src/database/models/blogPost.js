'use strict';

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    tablename: 'BlogPosts',
    timestamps: false,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user', onDelete: 'CASCADE' });
  };

  return BlogPost;
};