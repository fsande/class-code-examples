/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 12.Mar.2021
  * @desc Import / Export from ES6 Modules
  *       
  * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
  */

'use strict';

// import the book recommendations module
import {favoriteAuthor, favoriteBook, getBookRecommendations} from './book_recommendations.js';

// gets some music recommendations as well
let musicAlbums = [
  {artist: 'The Killers', title: 'Live From The Royal Albert Hall'},
  {artist: 'Eminem', title: 'The Marshall Mathers LP'}
];

// the two best items from each category
let topIdeas = function() {
  return [musicAlbums[0], favoriteBook()];
}
 
// outputs a message specifying the customer's recommended gifting items
const gifts = function() {
  console.log('Your recommended gifts are:\n');
  console.log('######MUSIC######');

  for (let i = 0, len = musicAlbums.length; i < len; i++) {
    console.log(musicAlbums[i].title + ' by ' + musicAlbums[i].artist);
  }
  console.log('######BOOKS######');
  let recommendedBooks = getBookRecommendations();
  for (let i = 0, len = recommendedBooks.length; i < len; i++) {
    console.log(recommendedBooks[i].title + ' by ' + recommendedBooks[i].author);
  }
  console.log('\n\nYours');
  console.log('Shop Staff\n*************');
  console.log('P.S. If you have a limited budget, you should just get the music album ' + topIdeas()[0].title + ' and the book ' + topIdeas()[1].title + '.');
}

console.log('Welcome to our gift shop.\n');
// Get the gifts
gifts();
