/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 26.Feb.2021
  * @desc Arrow Functions
  *       Arrow functions can be used in the same way as Function Expressions.
  *       For instance, to dynamically create a function:
  *
  * @see {@link https://javascript.info/arrow-functions-basics}
  */

'use strict';

const readlineSync = require('../../node_modules/readline-sync/');

const AGE = readlineSync.question('What is your age? ');

let welcome = (AGE < 18) ?
  () => console.log('Hello') :
  () => console.log('Greetings!');

welcome();
