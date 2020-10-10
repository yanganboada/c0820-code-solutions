/* eslint-disable no-unused-vars */
const fs = require('fs');
const read = fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) throw err;
  else {
    const parseData = JSON.parse(data);
    const notesList = parseData.notes;
    for (const prop in notesList) {
      console.log(`${prop}: ${notesList[prop]}`);
    }
  }
});

exports = read;
