const { Router } = require('express');
const controller = require('../controllers');

const user = Router();

user.post('/', controller.user.createNewUser);
user.get('/', controller.user.getAllUsers);

module.exports = user;
