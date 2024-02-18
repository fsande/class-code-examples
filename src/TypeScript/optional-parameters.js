"use strict";
/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 11, 2023
  * @desc TS classes.
  *       Optional parameters in methods
  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
class Dog {
    age;
    name;
    favoriteToy;
    constructor(age, name, favoriteToy) {
        this.age = age;
        this.name = name;
        if (favoriteToy !== undefined) {
            this.favoriteToy = favoriteToy;
        }
        else {
            this.favoriteToy = 'ball';
        }
    }
}
let main = async () => {
    let germanShepherd = new Dog(7, 'Lucky');
    let chihuahua = new Dog(4, 'Osita', 'squeaky bone');
};
exports.main = main;
(0, exports.main)();
