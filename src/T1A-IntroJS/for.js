/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 16.ene.2020
  * @desc for statement
  *
  * Computes 2^N
  */

'use strict';

const readlineSync = require('../../node_modules/readline-sync/');

let exponent = Number(readlineSync.question('Introduce exponente: '));
let result = 1;
for (let counter = 0; counter < exponent; counter++) {
  result = result * 2;
}
console.log('2^', exponent, " = ", result);
