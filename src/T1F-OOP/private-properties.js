/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 20.feb.2020
 * @desc Private Properties
 * @tutorial {@link https://www.sitepoint.com/javascript-private-class-fields/}
 */

'use strict';

class MyClass {
  a = 1;          // .a is public
  #b = 2;         // .#b is private
  static #c = 3;  // .#c is private and static

  incB() {
    this.#b++;
  }

}

let myObject = new MyClass();

myObject.incB(); // → runs OK
// myObject.#b = 0; // → error - private property cannot be modified outside class
