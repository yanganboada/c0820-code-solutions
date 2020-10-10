/* eslint-disable no-unused-vars */
const fs = require('fs');
const addNoteText = process.argv[3];

const create = fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) throw err;
  else {
    const parseData = JSON.parse(data);
    const notesList = parseData.notes;
    const newProp = Object.keys(notesList).length + 1;
    const newVal = addNoteText;
    notesList[newProp] = newVal;

    const formattedNotes = JSON.stringify(parseData, null, 2);

    fs.writeFile('./data.json', formattedNotes, 'utf8', err => {
      if (err) throw err;
      else {
        console.log(`Successfully add '${newVal}' to the list`);
      }
    });
  }
});

exports = create;
