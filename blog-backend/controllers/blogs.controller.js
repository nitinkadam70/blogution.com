const BlogModel = require('../model/BlogsSchema');

const getBlogs = async (req, res) => {
  try {
    const { q, _sort } = req.query;
    //global search
    if (q) {
      const q = req.query.q;
      const blogs = await BlogModel.find({
        $or: [
          { title: { $regex: new RegExp(q, 'i') } },
          { content: { $regex: new RegExp(q, 'i') } },
          { category: { $regex: new RegExp(q, 'i') } },
          { author: { $regex: new RegExp(q, 'i') } },
          { tags: { $regex: new RegExp(q, 'i') } },
          { _id: { $regex: new RegExp(q, 'i') } },
        ],
      });
      return res.status(200).send({ type: 'success', data: blogs });
    }
    //sort
    else if (_sort) {
      const sortField = req.query._sort;
      const sortOrder = req.query._order === 'asc' ? 1 : -1;

      console.log({ [sortField]: sortOrder });

      const blogs = await BlogModel.find({}).sort({
        [sortField]: sortOrder,
      });
      return res.status(200).send({ type: 'success', data: blogs });
    } else {
      const blogs = await BlogModel.find(req.query);
      return res.status(200).send({ type: 'success', data: blogs });
    }
  } catch (e) {
    return res
      .status(500)
      .json({ type: 'error', message: 'Internal Error Occurred' });
  }
};

//create blogs
const createBlog = async (req, res) => {
  console.log(req.body);
  try {
    const blog = await BlogModel.create(req.body);
    await blog.save();
    return res.status(201).json({
      type: 'success',
      message: 'blog created successfully',
    });
  } catch (e) {
    res.status(500).json({ type: 'error', message: e });
  }
};

//get Single Blog
const getSingleBlogs = async (req, res) => {
  try {
    const _id = req.params.id;
    let blog = await BlogModel.findById(_id);
    return res.status(200).send({ type: 'success', data: blog });
  } catch (e) {
    return res
      .status(500)
      .json({ type: 'error', message: 'Internal Error Occured' });
  }
};

//update blogs
const updateBlog = async (req, res) => {
  try {
    const _id = req.params.id;
    const update_Blog = await BlogModel.findByIdAndUpdate(
      _id,
      req.body
    );
    await update_Blog.save();
    return res.send({
      type: 'success',
      message: 'Blog updated successfully!',
    });
  } catch (error) {
    return res
      .status(500)
      .json({ type: 'error', message: 'Internal Error Occured' });
  }
};

//delete blog
const deleteBlog = async (req, res) => {
  try {
    const _id = req.params.id;
    const delete_Blog = await BlogModel.findByIdAndDelete(_id);
    return res
      .status(201)
      .send({ type: 'success', message: 'blog deleted sucessfully' });
  } catch {
    return res.status(500).send({
      type: 'error',
      message: 'Internal Error Occured',
    });
  }
};

module.exports = {
  getBlogs,
  createBlog,
  updateBlog,
  getSingleBlogs,
  deleteBlog,
};
