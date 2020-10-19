import React from 'react';
import ReactDom from 'react-dom';

const h1 = React.createElement('h1', null, 'Hello, React!');
ReactDom.render(h1, document.getElementById('root'));
