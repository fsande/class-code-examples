/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 04.feb.2020
  * @desc Inherent Truthfulness
  *
  * null, undefined, 0, NaN, '', "" evaluate to false
  * Everything else evaluates to true
  */

'use strict';

console.log(0 || 5);          // 5
console.log('hello' || 5);    // hello
console.log(true && 'what');  // what
if (0 || 5) {
  console.log('Sí');
}

if ('hello' || 5) {
  console.log('Sí');
}

if (true && 'what') {
  console.log('Sí');
}

// 0, NaN, empty string (""), and undefined/null are false
// Other values are true-ish

if('this string says false, but...!?') {
  console.log('in here!');
}

// no output
let myString = '';

if(myString) {
  console.log("you shouldn't see me!");
}

// … however, you can also set a variable's value to undefined:
let x = null;
let y = undefined;
console.log(x);      // → null
console.log(y);      // → undefined
