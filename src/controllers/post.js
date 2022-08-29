const { postService } = require('../services');

module.exports = {
  createNewPost: async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const userEmail = req.user.email;

    if (!title || !content || !categoryIds) {
      throw new Error('400|Some required fields are missing');
    }

    const createdPost = await postService.createNewPost(
      {
        title,
        content,
        categoryIds,
      },
      userEmail,
    );

    return res.status(201).json(createdPost);
  },
  getAllPosts: async (_req, res) => {
    const allPosts = await postService.getAllPosts();
    return res.status(200).json(allPosts);
  },
  getById: async (req, res) => {
    const { id } = req.params;
    const postById = await postService.getById(id);

    if (!postById) throw new Error('404|Post does not exist');

    return res.status(200).json(postById);
  },
  updateById: async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!title || !content) {
      throw new Error('400|Some required fields are missing');
    }    

    const updatedPost = await postService.updateById(id, { title, content });
    
    if (req.user.email !== updatedPost.user.email) {
      throw new Error('401|Unauthorized user');
    }
    return res.status(200).json(updatedPost);
  },
  deleteById: async (req, res) => {
    const { id } = req.params;

    const expecificPost = await postService.getById(id);

    if (!expecificPost) throw new Error('404|Post does not exist');

    if (req.user.email !== expecificPost.user.email) {
      throw new Error('401|Unauthorized user');
    }

    await postService.deleteById(id);
    return res.status(204).end();
  },
};
