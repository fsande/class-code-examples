/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 20.feb.2020
 * @desc Overriding methods
 *       By default, all methods that are not specified in a child class are taken directly “as is” from its parent class
 *       But if we specify our own method in the child then it will be used instead
 *       Usually we don’t want to totally replace a parent method, but rather to build on top of it to tweak or extend its functionality
 *       We do something in our method, but call the parent method before/after it or in the process
 *       Classes provide super keyword for that
 *         super.method(...) to call a parent method
 *         super(...) to call a parent constructor (inside our constructor only)
 * @tutorial {@link https://javascript.info/class-inheritance#overriding-a-method}
 *           {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super}
 */

'use strict';

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }

}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

let rabbit = new Rabbit("White Rabbit");
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White Rabbit hides!
