/**
 * @author       F. de Sande
 * @since 4.dec.2019
 *
 * Book Eloquent Javascrip 
 * Chapter 03
 *
 * @fileOverview 
 * Illustrates Closure
 * The code defines a function, wrapValue, that creates a local binding. 
 * It then returns a function that accesses and returns this local binding.
 *
 * Thinking about programs like this takes some practice. 
 * A good mental model is to think of function values as containing both the code in their body 
 * and the environment in which they are created. 
 * When called, the function body sees the environment in which it was created, 
 * not the environment in which it is called.
 * 
 * En el ejemplo, se llama multiplier y se crea un entorno en el que su parámetro factor está vinculado a 2. 
 * El valor de la función que devuelve, que se almacena en 'twice', recuerda este entorno. 
 * Así que cuando se llama así, multiplica su argumento por 2.
 */

"use strict";

function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
