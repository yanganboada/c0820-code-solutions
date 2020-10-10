const fs = require('fs');
const updateIndex = process.argv[3];
const updateNoteText = process.argv[4];

const update = fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) throw err;
  else {
    const parseData = JSON.parse(data);
    const notesList = parseData.notes;
    notesList[updateIndex] = updateNoteText;
    const formattedNotes = JSON.stringify(parseData, null, 2);

    fs.writeFile('./data.json', formattedNotes, 'utf8', err => {
      if (err) throw err;
      else {
        console.log(`Successfully updated '${updateNoteText}' at ${updateIndex}`);
      }
    });
  }
});

exports = update;
