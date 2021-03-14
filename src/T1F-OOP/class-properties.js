/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 13.Mar.2021
 * @desc Class properties
 * @tutorial {@link https://javascript.info/class#class-fields}
 */

'use strict';

class User {
  name = 'Anonymous';
  sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
}

new User().sayHi();
console.log(User.prototype.sayHi);  // The method placed in User.prototype
console.log(User.prototype.name);   // undefined, The property is not in User.prototype
