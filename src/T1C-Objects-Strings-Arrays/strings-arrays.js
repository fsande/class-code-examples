/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 20.ene.2020
  * @desc JS Strings and Arrays
  *       Strings are primitives
  *       They just act like objects when they're called upon to do so
  */

'use strict';

let myString = "I'm not really an object";
// myString.message = "prove it!"
console.log(myString.message);

let myArray = [];
console.log(typeof myArray);    // →  object
myArray[0] = 'ok'
myArray[4] = 'where are the previous elements?'
console.log(myArray);    // →  [ 'ok', <3 empty items>, 'where are the previous elements?' ]
