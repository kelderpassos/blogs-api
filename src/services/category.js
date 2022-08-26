const { Category } = require('../database/models');

module.exports = {
  createCategory: async (info) => {
    const newCategory = await Category.create(info);
    return newCategory;
  },
  getAllCategories: async () => {
    const allCategories = await Category.findAll();
    return allCategories;
  }, 
};