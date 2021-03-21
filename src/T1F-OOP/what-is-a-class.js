/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 13.Mar.2021
 * @desc What is a class
 *       A class is not an entirely new language-level entity, as one might think
 *       In JS a class is a kind of function
 *       The class declaration creates a function named User. 
 *       The function code is taken from the constructor method (assumed empty if we don’t write such method).
 *       Class methods, such as sayHi are stored in User.prototype.
 * @tutorial {@link https://javascript.info/class#what-is-a-class}
 */

'use strict';

class User {
  constructor(name) { this.name = name; }
  sayHi() { console.log(this.name); }
}

// class is a function
console.log(typeof User); // →  function

// ...or, more precisely, the constructor method
console.log(User === User.prototype.constructor); // →  true

// The methods are in User.prototype, e.g:
console.log(User.prototype.sayHi); // →  Function

// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype)); // →  constructor, sayHi
