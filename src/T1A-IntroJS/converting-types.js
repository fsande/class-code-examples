/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 04.feb.2020
  * @desc Double negation. Converting types
  *
  * @see {@link https://stackoverflow.com/questions/10467475/double-negation-in-javascript-what-is-the-purpose}
  *
  * It casts to boolean. The first ! negates it once, converting values like so:
  *    undefined to true
  *    null to true
  *    +0 to true
  *    -0 to true
  *    '' to true
  *    NaN to true
  *    false to true
  *    All other expressions to false
  * Then the other ! negates it again
  */

'use strict';

console.log('double negation: ');
console.log(!!5);

// Converting Types
// Some operators that we could use to convert a value into:
console.log(!!5);
console.log(5 + '');
console.log(+"5");
