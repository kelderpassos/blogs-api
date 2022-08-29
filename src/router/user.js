const { Router } = require('express');
const controller = require('../controllers');
const { auth } = require('../middlewares');

const user = Router();

user.post('/', controller.user.createNewUser);
user.get('/', auth, controller.user.getAllUsers);
user.get('/:id', auth, controller.user.getUserById);
user.delete('/me', auth, controller.user.deleteUserByToken);

module.exports = user;
