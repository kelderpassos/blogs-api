const { Router } = require('express');
const controller = require('../controllers');

const user = Router();

user.post('/', controller.user);

module.exports = user;