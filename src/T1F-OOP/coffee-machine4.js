/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 21.Mar.2021
 * @desc Private properties and methods
 * @tutorial {@link https://javascript.info/private-protected-properties-methods#protecting-wateramount}
 *           {@link https://google.github.io/styleguide/jsguide.html#features-classes-fields}
 */

'use strict';

/** 
 * Privates should start with #. 
 * They are only accessible from inside the class.
 * For instance, here’s a private #waterLimit property and the water-checking private method #checkWater
 *       
 * On the language level, # is a special sign that the field is private. 
 * We can’t access it from outside or from inheriting classes.
 * Unlike protected ones, private fields are enforced by the language itself. 
*/
class CoffeeMachine {
  /** @private} */
  #waterLimit = 200;


  /**
   * A private method
   * Checks that the water amount is a value in the range [0, #waterLimit]
   * @param  {number} value - The water amount to be ckecked
   */
  #checkWater(value) {
    if (value < 0) return 0;
    if (value > this.#waterLimit) return this.#waterLimit;
  }

  /**
   * Sets the water amount
   * @param  {number} value - The water amount
   */
  setWaterAmount(value) {
    this.#waterLimit = this.#checkWater(value);
  }
}

class MegaCoffeeMachine extends CoffeeMachine {
  method() {
    console.log(this.#waterAmount); // Error: can only access from CoffeeMachine
  }
}

let coffeeMachine = new CoffeeMachine();

// can't access privates from outside of the class
coffeeMachine.#checkWater(123); // Error
coffeeMachine.#waterLimit = 1000; // Error
