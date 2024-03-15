"use strict";
/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 11, 2023
  * @desc private modifier
  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
class Person {
    constructor(socialSecurityNumber, firstName, lastName) {
        this.socialSecurityNumber = socialSecurityNumber;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    socialSecurityNumber;
    firstName;
    lastName;
}
let main = async () => {
    const alan = new Person('153-07-3130', 'Alan', 'Turing');
    console.log(alan.getFullName());
    console.log(alan.socialSecurityNumber);
};
exports.main = main;
(0, exports.main)();
