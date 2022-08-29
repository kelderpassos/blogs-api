const { Router } = require('express');
const controller = require('../controllers');
const { auth } = require('../middlewares');

const post = Router();

post.post('/', auth, controller.post.createNewPost);
post.get('/search', auth, controller.post.getPostBySearchTerm);
post.get('/', auth, controller.post.getAllPosts);
post.get('/:id', auth, controller.post.getById);
post.put('/:id', auth, controller.post.updateById);
post.delete('/:id', auth, controller.post.deleteById);

module.exports = post;
