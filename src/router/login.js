const { Router } = require('express');
const controller = require('../controllers');

const login = Router();

login.post('/', controller);

module.exports = login;