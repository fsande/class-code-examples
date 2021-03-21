/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 21.Mar.2021
 * @desc Inheritance of static properties and methods
 *       Static properties and methods are inherited.
 *       In this example, Animal.compare and Animal.planet are 
 *       inherited and accessible as Rabbit.compare and Rabbit.planet.
 *       When we call Rabbit.compare, the inherited Animal.compare will be called.
 * @tutorial {@link https://javascript.info/static-properties-methods#statics-and-inheritance}
 */

'use strict';

class Animal {
  static planet = 'Earth';

  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }

}

// Inherit from Animal
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

let rabbits = [
  new Rabbit('White Rabbit', 10),
  new Rabbit('Black Rabbit', 5)
];

rabbits.sort(Rabbit.compare);
rabbits[0].run(); // Black Rabbit runs with speed 5.
console.log(Rabbit.planet); // Earth
