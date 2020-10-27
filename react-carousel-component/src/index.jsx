import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const pokeDex = [
  {
    id: '001',
    name: 'Bulbasaur',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
  },
  {
    id: '004',
    name: 'Charmander',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
  },
  {
    id: '006',
    name: 'Charizard',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
  },
  {
    id: '007',
    name: 'Squirtle',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
  },
  {
    id: '025',
    name: 'Pikachu',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
  }
];

ReactDOM.render(
  <Carousel list={pokeDex} />,
  document.getElementById('root')
);
