const mongoose = require('mongoose');

const blogsSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    category: { type: String, require: true },
    tags: { type: [String], require: true },
    content: { type: String, require: true },
    author: { type: String, require: true },
    Visitor: { type: Number, require: true },
    status: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const BlogsSchema = mongoose.model('blog', blogsSchema);

module.exports = BlogsSchema;
