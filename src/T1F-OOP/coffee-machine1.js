/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 21.Mar.2021
 * @desc Private and protected properties and methods
 *       Right now the properties waterAmount and power are public. 
 *       We can easily get/set them from the outside to any value.
 *       
 * @tutorial {@link https://javascript.info/private-protected-properties-methods#protecting-wateramount}
 */

'use strict';

class CoffeeMachine {
  waterAmount = 0; // the amount of water inside

  constructor(power) {
    this.power = power;
    console.log(`Created a coffee-machine, power: ${power}`);
  }
}

let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = 200;
