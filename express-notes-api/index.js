const express = require('express');
const app = express();
const fs = require('fs');
const notesJsonData = require('./data.json');
let notes = Object.values(notesJsonData.notes);
let nextId = notesJsonData.nextId;

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.get('/api/notes', (req, res, next) => {
  res.status(200).json(notes);
});

app.get('/api/notes/:id', (req, res, next) => {
  const reqId = parseInt(req.params.id, 10);
  const note = notes.filter(x => x.id === reqId);
  note.length
    ? res.status(200).json(note[0])
    : Math.floor(reqId) !== reqId || typeof reqId !== 'number'
      ? res.status(400).json({ error: 'id must be a positive integer' })
      : res.status(404).json({ error: 'cannot find note with id ' + reqId });
});

app.post('/api/notes', (req, res, next) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (typeof req.body === 'undefined') {
    res.status(500).json({ error: 'An unexpected error occurred.' });
  } else {
    req.body.id = nextId++;
    res.status(201).json(req.body);
    notes.push(req.body);
    whiteDataToFile(notes, nextId);
  }
});

app.delete('/api/notes/:id', (req, res, next) => {
  const reqId = parseInt(req.params.id, 10);
  const updateNoteIndex = notes.findIndex(x => x.id === reqId);
  if (updateNoteIndex !== -1) {
    notes = notes.filter(x => x.id !== reqId);
    res.status(204).json();
    whiteDataToFile(notes, nextId);
  } else {
    if (!Number.isInteger(reqId)) {
      res.status(400).json({ error: 'id must be a positive integer' });
    }
    if (updateNoteIndex === -1) {
      res.status(404).json({ error: 'cannot find note with id ' + reqId });
    }
    if (typeof res.body === 'undefined') {
      res.status(500).json({ error: 'An unexpected error occurred.' });
    }
  }
});

app.put('/api/notes/:id', (req, res) => {
  const reqId = parseInt(req.params.id, 10);
  const updateNoteIndex = notes.findIndex(x => x.id === reqId);
  if (updateNoteIndex !== -1 && req.body.content) {
    notes[updateNoteIndex].content = req.body.content;
    res.status(200).json(notes[updateNoteIndex]);
    whiteDataToFile(notes, nextId);
  } else {
    if (!Number.isInteger(reqId)) {
      res.status(400).json({ error: 'id must be a positive integer' });
    }
    if (!req.body.content) {
      res.status(400).json({ error: 'content is a required field' });
    }
    if (updateNoteIndex === -1) {
      res.status(404).json({ error: 'cannot find note with id ' + reqId });
    }
    if (typeof res.body === 'undefined') {
      res.status(500).json({ error: 'An unexpected error occurred.' });
    }
  }
});

app.listen(3000, () => {
  console.log('Listen to 3000');
});

function whiteDataToFile(notesUpdate, idUpdate) {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    else {
      const newNotes = {};
      notesUpdate.forEach(x => {
        newNotes[x.id] = x;
      });
      const parseData = JSON.parse(data);
      parseData.nextId = idUpdate;
      parseData.notes = newNotes;
      const stringfyData = JSON.stringify(parseData, null, 2);

      fs.writeFile('./data.json', stringfyData, 'utf8', err => {
        if (err) throw err;
      });
    }
  });
}
