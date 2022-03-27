/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 20.feb.2020
 * @desc Class Getters & Setters
 *       Google JS Style Guide:
 *       Do not use JS getter and setter properties. 
 *       They are potentially surprising and difficult to reason about.
 *       Provide ordinary methods instead.
 * @tutorial {@link https://javascript.info/class#getters-setters}
 */

'use strict';

/**
 * Google JS Style Guide:
 * Do not use JS getter and setter properties. 
 * They are potentially surprising and difficult to reason about.
 * Provide ordinary methods instead.
 * {@link https://google.github.io/styleguide/jsguide.html#features-classes-getters-and-setters}
 */
class User {
  MIN_NAME_LENGHT = 4;  // A property in the class

  constructor(name) {
    // invokes the setter
    this.setName(name);
  }

  getName() {
    console.log('The getter executing...');
    return this.name_;
  }

  setName(value) {
    console.log('The setter executing...');
    if (value.length < this.MIN_NAME_LENGHT) {
      console.log('Name is too short.');
      return;
    }
    this.name_ = value;
  }
}

let user = new User('John');
console.log(user.getName());      // John
user = new User('');              // Name is too short.
