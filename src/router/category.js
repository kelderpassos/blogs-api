const { Router } = require('express');
const controller = require('../controllers');
const { auth } = require('../middlewares');

const category = Router();

category.post('/', auth, controller.category.createCategory);
category.get('/', auth, controller.category.getAllCategories);

module.exports = category;