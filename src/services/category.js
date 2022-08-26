const { Category } = require('../database/models');

module.exports = {
  createCategory: async (info) => {
    const newCategory = await Category.create(info);
    return newCategory;
  },
};