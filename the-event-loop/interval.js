/* eslint-disable no-console */
let counter = 3;
const countDown = setInterval(() => {
  if (counter) {
    console.log(counter);
    counter--;
  } else {
    console.log('Blast off!');
    clearInterval(countDown);
    counter = 3;
  }
}, 1000);
