const express = require('express');
const app = express();

const grades = [];

const getJson = app.get('/api/grades', (req, res) => {
  res.json(grades);
});

const jsonParse = express.json(getJson);
app.use(jsonParse, (req, res) => {
  grades.push(req.body);
  res.sendStatus(201);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listen to 3000!');
});
