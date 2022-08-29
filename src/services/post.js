const Sequelize = require('sequelize');
const { BlogPost, Category, PostCategory, User } = require('../database/models');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const checkIfCategoryExists = async (id) => {
  const existingPost = await Category.findByPk(id);
  if (!existingPost) throw new Error('400|"categoryIds" not found');
};

module.exports = {
  createNewPost: async (info, userEmail) => {
    const { title, content, categoryIds } = info;
    await Promise.all(categoryIds.map((id) => checkIfCategoryExists(id)));
    const user = await User.findOne({ where: { email: userEmail } });
    const transaction = await sequelize.transaction(async (t) => {
      const newPost = await BlogPost.create({ title,
          content,
          userId: user.id,
          published: new Date(),
          updated: new Date(),
        }, { transaction: t });
        const specificIds = categoryIds.map((id) => ({
        postId: newPost.id, categoryId: id,
        }));
        await PostCategory.bulkCreate(specificIds, { transaction: t });
        return newPost;
    });
    return transaction;
  },
  getAllPosts: async () => BlogPost
    .findAll({ include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } }, 
      { model: Category, as: 'categories' },
    ] }),
  getById: async (pk) => BlogPost.findByPk(pk, { include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } }, 
    { model: Category, as: 'categories' },
  ] }),
  updateById: async (id, { title, content }) => {

    await BlogPost.update({ title, content }, { where: { id } });
    const updatedPost = await BlogPost.findByPk(id, { include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } }, 
      { model: Category, as: 'categories' },
    ] });
    return updatedPost;
  },
};
