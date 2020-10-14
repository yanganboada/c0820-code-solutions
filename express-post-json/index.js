const path = require('path');
const express = require('express');
const app = express();

const grades = [];
let nextId = 1;

const getJson = app.get('/api/grades', (req, res) => {
  res.json(grades);
});
const jsonParse = express.json(getJson);

app.post(jsonParse, (req, res) => {
  req.body.id = nextId;
  grades.push(req.body);
  res.status(201).send(req.body);
  nextId++;
});

const target = path.join(__dirname, 'public');
const file = express.static(target);
// app.use(file);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listen to 3000!');
});
