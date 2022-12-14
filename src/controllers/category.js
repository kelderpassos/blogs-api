const { categoryService } = require('../services');

module.exports = {
  createCategory: async (req, res) => {
    const { name } = req.body;

    if (!name) throw new Error('400|"name" is required');

    const newCategory = await categoryService.createCategory({ name });

    return res.status(201).json(newCategory);
  },
  getAllCategories: async (_req, res) => {
    const allCategories = await categoryService.getAllCategories();
    return res.status(200).json(allCategories);
  }, 
};
