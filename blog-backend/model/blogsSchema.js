const mongoose = require("mongoose");

// Title, - text
// Category , text
// Tags [ ],
// Content - string
// Author ,
// Timestamp
// Visitor count

const blogsSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    category: { type: String, require: true },
    tags: { type: [String], require: true },
    content: { type: String, require: true },
    author: { type: String, require: false },
    visitorCount: { type: Number, require: false },
  },
  { timestamps: true }
);

const BlogsSchema = mongoose.model("post", blogsSchema);

module.exports = BlogsSchema;
