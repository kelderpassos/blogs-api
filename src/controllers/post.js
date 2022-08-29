const { postService } = require('../services');

module.exports = {
  createNewPost: async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const userEmail = req.user.email;

    if (!title || !content || !categoryIds) {
      throw new Error('400|Some required fields are missing');
    }

    const createdPost = await postService.createNewPost({
      title,
      content,
      categoryIds,
    }, userEmail);

    return res.status(201).json(createdPost);
  },
  getAllPosts: async (_req, res) => {
    const allPosts = await postService.getAllPosts();
    return res.status(200).json(allPosts);
  },
};
