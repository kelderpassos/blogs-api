const { categoryService } = require('../services');

module.exports = {
  createCategory: async (req, res) => {
    const { name } = req.body;

    if (!name) throw new Error('400|"name" is required');

    const newCategory = await categoryService.createCategory({ name });

    return res.status(201).json(newCategory);
  },
};
