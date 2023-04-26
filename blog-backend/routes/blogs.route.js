const { Router } = require('express');
const {
  getBlogs,
  createBlog,
  updateBlog,
  getSingleBlogs,
  deleteBlog,
  filterBlogs,
} = require('../controllers/blogs.controller');

const blogsRouter = Router();

blogsRouter.get('/posts', getBlogs);
blogsRouter.get('/posts/:id', getSingleBlogs);
blogsRouter.post('/posts/create', createBlog);
blogsRouter.patch('/posts/:id', updateBlog);
blogsRouter.delete('/posts/:id', deleteBlog);

module.exports = blogsRouter;
