/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 20.feb.2020
 * @desc Object accessors
 * @tutorial {@link https://javascript.info/property-accessors}
 *
 *           Destructuring assignment:
 *           {@link https://javascript.info/destructuring-assignment}
 */

'use strict';

let user = {
  name: 'John',
  surname: 'Smith',

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(' '); // unpack values from array value.split() into this.name and this.surname
  }
};

console.log(user.fullName);     // → John Smith
console.log(user);              // fullName property has been added 

// set fullName is executed with the given value.
user.fullName = 'Albert Einstein';
console.log(user.name); // Albert
console.log(user.surname); // Einstein
