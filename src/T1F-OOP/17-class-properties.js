/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 20.feb.2020
 * @desc class properties
 */

'use strict';

/**
 * The property name is not placed into User.prototype. 
 * Instead, it is created by new before calling the constructor, it’s a property of the object itself.
 * 
 * Class fields are set on individual objects, not User.prototype:
 * {@link https://javascript.info/class#class-fields}
 */
class User {
  name = 'Alan Turing';

  sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
}

new User().sayHi();

console.log(User.prototype.sayHi);    // placed in User.prototype
console.log(User.prototype.name);     // undefined, not placed in User.prototype
