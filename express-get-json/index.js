const express = require('express');
const app = express();

const student = [
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

app.get('/api/grades', (req, res) => {
  res.json(student);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening 3000');
});
