/* global _ */
/* eslint-disable no-console */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

setTimeout(() => { console.log('Type "play()" in console for A New Game'); }, 500);

function createCards() {
  const cardsSuit = ['clubs', 'diamonds', 'hearts', 'spades'];
  const cardsRank = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  const cardsData = [];
  cardsSuit.forEach(x => {
    cardsRank.forEach(y => {
      if (y === 'A') {
        cardsData.push({ card: `${x} ${y}`, value: 11 });
      } else if (y === 'J' || y === 'Q' || y === 'K') {
        cardsData.push({ card: `${x} ${y}`, value: 10 });
      } else {
        cardsData.push({ card: `${x} ${y}`, value: y });
      }
    });
  });
  return _.shuffle(cardsData);
}

function play() {
  const player = ['Annie', 'Tim D.', 'Cody', 'Uzair'];
  const cardsPerHand = 2;
  const cardsData = createCards();
  const cardsSplitArray = _.chunk(cardsData, player.length * cardsPerHand);
  cardsSplitArray.pop();
  let round = 1;
  let increment = 1;
  let interval = 0;
  cardsSplitArray.forEach(x => {
    const roundRonner = setTimeout(() => {
      if (round <= cardsSplitArray.length) {
        console.log('-------------Round: ', round++, '--------------');
        const eachPlayerArray = _.chunk(x, cardsPerHand);
        const roundRecord = [];
        for (let i = 0; i < player.length; i++) {
          if (player[i]) {
            const total = eachPlayerArray[i][0].value + eachPlayerArray[i][1].value;
            console.log(player[i], '\n',
              'Card1: ', eachPlayerArray[i][0].card, '\n',
              'Card2: ', eachPlayerArray[i][1].card, '\n',
              'Total: ', total);
            const scoreInfo = {};
            scoreInfo.player = player[i];
            scoreInfo.total = total;
            roundRecord.push(scoreInfo);
          }
        }
        const sortRecord = _.sortBy(roundRecord, ['total', 'player']);
        const winner = sortRecord[sortRecord.length - 1].player;
        const highest = sortRecord[sortRecord.length - 1].total;
        console.log(`Round ${round - 1} winner is ${winner} with highest score of ${highest}`);
      }
      clearTimeout(roundRonner);
    }, interval * increment);
    interval = 2500;
    increment++;
  });
  setTimeout(() => { console.log('--||| GAME OVER! |||--'); }, 16000);
  setTimeout(() => { console.log('Type "play()" in console for A New Game'); }, 18500);
}
