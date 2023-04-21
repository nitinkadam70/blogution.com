const express = require('express');
const cors = require('cors');
const connection = require('./config/db');
const blogsRouter = require('./routes/blogs.route');
require('dotenv').config();

const app = express(); //Server

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(blogsRouter);

//Read Data or Get Data
app.get('/', (req, res) => {
  res.send({ status: 'success', msg: 'Welcome to Homepage' });
});

//Route for wrong url
app.all('*', (req, res) => {
  res.status(404).send('Not Found');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log('Connected to MongoDB');
  } catch (e) {
    console.log('ERROR: ' + e);
  }
  console.log(`server started on http://localhost:${PORT}`);
});
