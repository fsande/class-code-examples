/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 14.Mar.2021
 * @desc Overriding constructor
 *       If a class extends another class and has no constructor, then the "default" constructor calls the parent constructor passing it all the arguments
 *       For the constructor in a child class to work, it needs to call super() before using this
 * @tutorial {@link https://javascript.info/class-inheritance#overriding-constructor}
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

/**
 * You must call super in the constructor of a derived class before you use this.
 * Within normal method definitions, derived classes can refer to methods on 
 * the parent class with dot notation: super.methodName (see the stop() method in Rabbit)
*/
class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  hide() {
    console.log(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

let rabbit = new Rabbit('White Rabbit', 10);
console.log(rabbit.name); // White Rabbit
console.log(rabbit.earLength); // 10
