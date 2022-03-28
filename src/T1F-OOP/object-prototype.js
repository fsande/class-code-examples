/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 20.feb.2020
 * @desc Object Prototype
 */

'use strict';

// The prototype of an empty object is Object.prototype:
console.log(Object.getPrototypeOf({}) === Object.prototype);          // → true

// The Object.prototype prototype is null:
console.log(Object.getPrototypeOf(Object.prototype));                // → null

// Prototypes of functions and Arrays ara Function.prototype and Array.prototype
const myFunc = function(x) { return x; }
console.log(Object.getPrototypeOf(myFunc) === Function.prototype);   // → true
console.log(Object.getPrototypeOf([1, 2, 3]) === Array.prototype);  // → true

// Prototype of Array.prototype is Object.prototype
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype);    // → true
