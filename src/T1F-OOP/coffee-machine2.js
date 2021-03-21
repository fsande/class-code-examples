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
 *           {@link https://google.github.io/styleguide/jsguide.html#features-classes-fields}
 */

'use strict';

/**
 * Let’s change waterAmount property to protected to have more control over it. 
 * For instance, we don’t want anyone to set it below zero.
 * Protected properties are usually postfixed with an underscore _.
 * That is not enforced on the language level, but there’s a well-known convention 
 * between programmers that such properties and methods should not be accessed from the outside.
 * So our property will be called waterAmount_
 *
 * Now the access is under control, so setting the water amount below zero becomes impossible.
*/
class CoffeeMachine {
  /** @protected {number} */
  waterAmount_ = 0;

  constructor(power) {
    /** @protected @const {number} */
    this.power_ = power;
  }

  setWaterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this.waterAmount_ = value;
  }

  getWaterAmount() {
    return this.waterAmount_;
  }
}

let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.setWaterAmount(-10); // Error: Negative water
console.log(coffeeMachine.getWaterAmount());
