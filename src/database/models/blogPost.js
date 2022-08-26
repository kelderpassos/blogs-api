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
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };

  return BlogPost;
};

// const { title, content, categoryIds } = info;
//     const user = await User.findOne({ where: { email: userEmail } });
//     await Promise.all(categoryIds.map((id) => checkIfPostExists(id)));

//     await sequelize.transaction(async (t) => {
//       await BlogPost.create(
//         { title,
//           content,
//           userId: user.id,
//           published: new Date(),
//           updated: new Date(),
//         },
//         { transaction: t },
//       );
//       await PostCategory.bulkCreate(categoryIds, { transaction: t });
//     });
//     const allPosts = await BlogPost.findAll();
//     return allPosts;

// const { title, content, categoryIds } = info;
//     const t = await sequelize.transaction();
//     const user = await User.findOne({ where: { email: userEmail } });
//     console.log(info);

//     await Promise.all(categoryIds.map((id) => checkIfPostExists(id)));
//     await BlogPost.create(
//       {
//         title,
//         content,
//         userId: user.id,
//         published: new Date(),
//         updated: new Date(),
//       },
//       { transaction: t },
//     );
//     await PostCategory.bulkCreate(categoryIds, { transaction: t });

//     const allPosts = await BlogPost.findAll();

//     return allPosts;