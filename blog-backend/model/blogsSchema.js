const mongoose = require('mongoose');

const blogsSchema = mongoose.Schema({
  title: { type: String, require: true },
});

const BlogsSchema = mongoose.model('dish', blogsSchema);

module.exports = BlogsSchema;