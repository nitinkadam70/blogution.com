const { Router } = require("express");

const {
  getBlogs,
  createBlog,
  updateBlog,
  getSingleBlogs,
  deleteBlog,
  login
} = require("../controllers/blogs.controller");
const { isAuth } = require("../middlewares/auth");

const blogsRouter = Router();

blogsRouter.get("/posts", getBlogs);
blogsRouter.get("/posts/:id", getSingleBlogs);
blogsRouter.post("/posts/create",isAuth, createBlog);
blogsRouter.patch("/posts/update/:id",isAuth, updateBlog);
blogsRouter.delete("/posts/delete/:id",isAuth, deleteBlog);
blogsRouter.post("/auth/login", login);

module.exports = blogsRouter;
