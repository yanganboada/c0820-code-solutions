/* eslint-disable no-console */
const fs = require('fs');
const file = process.argv[2];

fs.readFile(`./${file}`, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
