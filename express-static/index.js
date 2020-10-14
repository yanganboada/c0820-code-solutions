const express = require('express');
const path = require('path');
const app = express();

const target = path.join(__dirname, 'public');
const file = express.static(target);

app.use(file);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listen to port 3000');
});
