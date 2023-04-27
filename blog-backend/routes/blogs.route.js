const { Router } = require('express');
const {
  getBlogs,
  createBlog,
  updateBlog,
  getSingleBlogs,
  deleteBlog,
  filterBlogs,
  login,
} = require('../controllers/blogs.controller');
// const { isAuth } = require("../middlewares/auth");
const blogsRouter = Router();

blogsRouter.get('/posts', getBlogs);
blogsRouter.get('/posts/:id', getSingleBlogs);
blogsRouter.post('/posts/create', createBlog);
blogsRouter.patch('/posts/:id', updateBlog);
blogsRouter.delete('/posts/:id', deleteBlog);
blogsRouter.post("/auth/login", login);

module.exports = blogsRouter;
