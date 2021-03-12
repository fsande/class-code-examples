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

// stores the favorite author in a constant variable
export const favoriteAuthor = { name: 'Ken Bruen', genre: 'Noir', nationality: 'Irish' };

// returns the favorite book
export function favoriteBook() {
  return { title: 'The Guards', author: 'Ken Bruen' };
}

// returns a list of good books
export function getBookRecommendations() {
  return [
        {id: 1, title: 'The Guards', author: 'Ken Bruen'},
        {id: 2, title: 'The Stand', author: 'Steven King'},
        {id: 3, title: 'The Postman Always Rings Twice', author: 'James M. Cain'}
    ];
}
