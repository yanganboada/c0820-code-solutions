import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const subjects = [
  {
    id: 1,
    subject: 'Hypertext Markup Language',
    description: 'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.'
  },
  {
    id: 2,
    subject: 'Cascading Style Sheets',
    description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.'
  },
  {
    id: 3,
    subject: 'JavaScript',
    description: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high- level, often just -in -time compiled, and multi - paradigm.It has curly - bracket syntax, dynamic typing, prototype - based object - orientation, and first - class functions.'
  }
];

ReactDOM.render(
  <Accordion list={subjects} />,
  document.getElementById('root')
);
