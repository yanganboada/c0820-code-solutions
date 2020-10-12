/* global _ */
/* eslint-disable no-console */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

const cardsSuit = ['clubs', 'diamonds', 'hearts', 'spades'];
const cardsRank = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const cardsData = [];

createCards(cardsSuit, cardsRank);

function createCards(cardsSuit, cardsRank) {
  cardsSuit.forEach(x => {
    cardsRank.forEach(y => {
      if (y === 'A') {
        cardsData.push({ card: `${x} ${y}`, value: 11 });
      } else if (y === 'J' || y === 'Q' || y === 'K') {
        cardsData.push({ card: `${x} ${y}`, value: 10 });
      } else {
        cardsData.push({ card: `${x} ${y}`, value: `${y}` });
      }
    });
  });
  shuffle(cardsData);
}

function shuffle(cardsData) {
  let i = cardsData.length;
  while (i !== 0) {
    const randomIndex = Math.floor(Math.random() * i);
    i--;
    const holdVal = cardsData[i];
    cardsData[i] = cardsData[randomIndex];
    cardsData[randomIndex] = holdVal;
  }
  console.log(cardsData);
  return cardsData;
}
