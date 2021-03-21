/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 13.Mar.2021
 * @desc Class expression
 *        You can make classes dynamically "on-demand"

 * @tutorial {@link https://javascript.info/class#class-expression}
 */

'use strict';

/**
* Returns a class with a single method, sayHi that prints the phrase
* @param {string} phrase 
* @return {function (class)} 
*/
const makeClass = function(phrase) {
  // declare a class and return it
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

// Create a new class
let User = makeClass('Hello');
new User().sayHi(); // Hello
