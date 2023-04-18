const BlogModel = require("../../model/blogsSchema");
const createBlogs = async (req, res) => {
  try {
    const blog = await new BlogModel(req.body);

    console.log("createBlogs  blog:", blog);

    blog.save((err, success) => {
      if (err) {
        return res.status(500).send({
          type: "error",
          message: "somthing went wrong while saving data to databaase",
        });
      }
      return res
        .status(201)
        .send({ type: "success", message: "data saved successfully" });
    });
  } catch (error) {
    console.log("createBlogs  error:", error);

    return res.status(500).send({ type: "error", message: error.message });
  }
};
module.exports = { createBlogs };
