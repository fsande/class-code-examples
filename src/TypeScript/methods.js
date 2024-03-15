"use strict";
/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 11, 2023
  * @desc TS classes. Method example
  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
class Dog {
    name = '';
    age = 0;
    makeNoise() {
        console.log('woof woof');
    }
}
let main = async () => {
    let toby = new Dog();
    toby.makeNoise();
};
exports.main = main;
(0, exports.main)();
