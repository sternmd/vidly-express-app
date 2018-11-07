const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

// DUMMY DATA
const genres = [
  { id: 1, name: 'Drama'},
  { id: 2, name: 'Thriller'},
  { id: 3, name: 'Comedy'}
];

// GET
app.get('/api/genres', (req, res) => {
  res.send(genres)
});

// PORT
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
