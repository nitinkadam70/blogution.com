const { Router } = require("express");
const { getBlogs } = require("../controllers/blogs/getAllBlogs.controller");
const { createBlogs } = require("../controllers/blogs/createBlog.controller");

const blogsRouter = Router();

blogsRouter.get("/posts", getBlogs);
blogsRouter.get("/posts/create", createBlogs);

module.exports = blogsRouter;
