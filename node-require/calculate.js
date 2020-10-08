/* eslint-disable no-console */
const plus = require('./add');
const minus = require('./subtract');
const times = require('./multiply');
const over = require('./divide');

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[4]);
const operate = process.argv[3];

if (operate === 'plus') {
  console.log('result: ', plus.cal(num1, num2));
}

if (operate === 'minus') {
  console.log('result: ', minus.cal(num1, num2));
}

if (operate === 'times') {
  console.log('result: ', times.cal(num1, num2));
}

if (operate === 'over') {
  console.log('result: ', over.cal(num1, num2));
}
