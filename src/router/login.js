const { Router } = require('express');
const controller = require('../controllers');

const login = Router();

login.post('/', controller.login);

module.exports = login;