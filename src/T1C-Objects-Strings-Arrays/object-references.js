/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 7.Mar.2021
  * @desc Object references
  *       Objects are stored and copied “by reference”, whereas primitive values are always copied “as a whole value”
  *       A variable assigned to an object stores not the object itself, but its “address in memory” (a reference) to it
  *       
  *       
  * @see {@link https://javascript.info/object#the-for-in-loop}
  */

'use strict';

let user = {name: 'John'};
let admin = user;
admin.name = 'Pete'; // changed by the "admin" reference
console.log(user.name); //  → 'Pete'

let a = {};
let b = a; // copy the reference

// both variables reference the same object
console.log(a === b); // → true

let c = {};
let d = {}; // two independent objects

console.log(c === d); // → false
