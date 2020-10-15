const path = require('path');
const express = require('express');
const app = express();

let nextId = 3;
const grades = [
  {
    id: 1,
    name: 'yoyo',
    course: 'HTML',
    grade: 98
  },
  {
    id: 2,
    name: 'yeye',
    course: 'CSS',
    grade: 95
  }
];

const target = path.join(__dirname, 'public');
const file = express.static(target);
app.use(file);

const jsonParse = express.json();

app.use(jsonParse);

app.get('/api/grades', (req, res, next) => {
  res.json(grades);
});

app.post('/api/grades', (req, res, next) => {
  req.body.id = nextId++;
  grades.push(req.body);
  res.status(201).send(req.body);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listen to 3000!');
});
