const BlogModel = require('../model/BlogsSchema');


//getting Blogs
const getBlogs = async (req, res) => {
  const page = req.query._page || 1;
  const limit = req.query._limit || 10;
  const sortField = req.query._sort;
  const sortOrder = req.query._order === 'asc' ? 1 : -1;
  const filter = req.query.type;
  const search = req.query.q;

  try {
    //filter
    const query = {};
    if (filter) {
      query.type = filter;
    }
    if (search) {
      query.$text = { $search: search };
    }
    console.log(query);

    let blogs = await BlogModel.find(query)
      .sort({ [sortField]: sortOrder })
      .skip((page - 1) * limit)
      .limit(limit)
      .exec((err, items) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.status(201).send({ type: 'success', data: items });
      });

    //return res.status(200).send({ type: 'success', data: blogs });
  } catch (e) {
    return res
      .status(500)
      .json({ type: 'error', message: 'Internal Error Occured' });
  }
};
