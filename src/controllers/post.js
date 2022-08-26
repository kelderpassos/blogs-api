const jwt = require('jsonwebtoken');
const { postService } = require('../services');

const { JWT_SECRET } = process.env;

module.exports = {
  createNewPost: async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const token = req.headers.authorization;
    const payload = jwt.verify(token, JWT_SECRET);

    if (!title || !content || !categoryIds) {
      throw new Error('400|Some required fields are missing');
    }

    const createdPost = await postService.createNewPost({
      title,
      content,
      categoryIds,
    }, payload.email);

    return res.status(201).json(createdPost);
  },
};
