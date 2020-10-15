/* global _ */
/* eslint-disable no-console */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

setTimeout(() => { console.log('Type "play()" in console for A New Game'); }, 1000);

const cardsSuit = ['clubs', 'diamonds', 'hearts', 'spades'];
const cardsRank = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const cardsData = [];
const player = ['Annie', 'Tim D.', 'Cody', 'Uzair'];
const cardsPerHand = 2;

function createCards(suit, rank) {
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
  _.shuffle(cardsData);
  return cardsData;
}

function play() {
  createCards(cardsSuit, cardsRank);
  const cardsSplitArray = _.chunk(cardsData, player.length * cardsPerHand);
  cardsSplitArray.pop(-1);
  let round = 1;
  cardsSplitArray.forEach(x => {
    if (round <= cardsSplitArray.length) {
      console.log('-------------Round: ', round++, '--------------');
      const eachPlayerArray = _.chunk(x, cardsPerHand);
      for (let i = 0; i < player.length; i++) {
        console.log(player[i], '\n',
          'Card1: ', eachPlayerArray[i][0].card, '\n',
          'Card2: ', eachPlayerArray[i][1].card, '\n',
          'Total: ', eachPlayerArray[i][0].value + eachPlayerArray[i][1].value
        );

      }
    }
  });
}
