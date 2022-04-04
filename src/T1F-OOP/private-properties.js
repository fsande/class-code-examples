/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 20.feb.2020
 * @desc Private and protected properties and methods
 * @tutorial {@link https://javascript.info/private-protected-properties-methods#private-waterlimit}
 *           {@link https://stackoverflow.com/questions/22156326/private-properties-in-javascript-es6-classes}
 *           {@link https://dev.to/bhagatparwinder/classes-in-js-public-private-and-protected-1lok}
 */

'use strict';

class CoffeeMachine {
  #waterLimit = 200;

  #checkWater(value) {
    if (value < 0) throw new Error('Negative water');
    if (value > this.#waterLimit) throw new Error('Too much water');
  }

  toString() {
    return 'Water level in the machine: ' + this.#waterLimit;
  }

}

let coffeeMachine = new CoffeeMachine();
console.log(coffeeMachine.toString());

// can't access privates from outside of the class
// coffeeMachine.#checkWater(); // Error
// coffeeMachine.#waterLimit = 1000; // Error
