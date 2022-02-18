/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 16.ene.2020
  * @desc Conditional statements
  *
  * @see {@link https://nodejs.org/api/readline.html}
  */

'use strict';

const readlineSync = require('../../node_modules/readline-sync/');

let number = Number(readlineSync.question('Introduzca un número: '));
if (!Number.isNaN(number)) { // Si es un número
  console.log('El número es: ' + number);
  if (number < 10) {
    console.log('Pequeño');
  } else if (number < 100) {
    console.log('Medio');
  } else {
    console.log('Grande');
  }
} else {
  console.log('No se introdujo un número...');
}
