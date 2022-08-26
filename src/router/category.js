const { Router } = require('express');
const controller = require('../controllers');
const { auth } = require('../middlewares');

const category = Router();

category.post('/', auth, controller.category.createCategory);

module.exports = category;