/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const promise = takeAChance('Annie');
promise.then(successMessage => console.log(successMessage));
promise.catch(erroMessage => console.log(erroMessage));
