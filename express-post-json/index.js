const express = require('express');
const app = express();

const grades = [];

const getJson = app.get('/api/grades', (req, res) => {
  res.json(grades);
});

const jsonParse = express.json(getJson);
app.use(jsonParse, (req, res) => {
  const idNum = grades.length + 1;
  req.body.id = idNum;
  grades.push(req.body);
  res.status(201).send(req.body);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listen to 3000!');
});
