const express = require('express');
const app = express();

let student = [
  {
    id: 1,
    name: 'Beeg Yoshi',
    course: 'Meming',
    grade: 88
  },
  {
    id: 2,
    name: 'Yang An Boada',
    course: 'Node.js',
    grade: 95
  }
];

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.get('/api/grades', (req, res, next) => {
  res.json(student);
});

app.delete('/api/grades/:id', (req, res) => {
  student = student.filter(x => `${x.id}` !== req.params.id);
  res.sendStatus(204);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listen to 3000');
});
