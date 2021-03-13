/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 13.Mar.2021
 * @desc Class expression
 * @tutorial {@link https://javascript.info/class#class-expression}
 */

'use strict';

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
