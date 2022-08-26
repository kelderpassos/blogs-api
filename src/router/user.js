const { Router } = require('express');
const controller = require('../controllers');

const user = Router();

user.post('/', controller.user.createNewUser);
user.get('/', controller.user.getAllUsers);
user.get('/:id', controller.user.getUserById);

module.exports = user;
