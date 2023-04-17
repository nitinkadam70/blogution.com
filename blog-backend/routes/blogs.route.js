const { Router } = require('express');

const blogsRouter = Router();

//Getting All dishes
blogsRouter.get('/posts', getBlogs);

module.exports = blogsRouter;
