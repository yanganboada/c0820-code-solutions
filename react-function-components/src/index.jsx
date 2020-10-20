import React from 'react';
import ReactDOM from 'react-dom';

function CreateBtn() {
  return <button>Click Me!</button>;
}

const btnElt = <CreateBtn />;

ReactDOM.render(
  btnElt,
  document.getElementById('root')
);
