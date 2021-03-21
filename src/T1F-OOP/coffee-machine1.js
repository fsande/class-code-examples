/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 21.Mar.2021
 * @desc Private and protected properties and methods
 *       
 * @tutorial {@link https://javascript.info/private-protected-properties-methods#protecting-wateramount}
 */

'use strict';

/**
 * A class to represent a Coffe Machine 
 * Right now the properties waterAmount and power are public. 
 * We can easily get/set them from the outside to any value.
*/
class CoffeeMachine {
  /** @public {number} */
  waterAmount = 0; // the amount of water inside
  constructor(power) {
    /** @public {number} */
    this.power = power;
    console.log(`Created a coffee-machine, power: ${power}`);
  }
}

let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = 200;
console.log('Coffee Machine: ');
console.log(coffeeMachine);
