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

// POST
app.post('/api/genres', (req, res) => {
  const { error } = validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const genre = {
    id: genres.length + 1,
    name: req.body.name
  }
  genres.push(genre);
  res.send(genre);

});

function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).require()
  };

  return Joi.validate(genre, schema);
}

// PORT
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
