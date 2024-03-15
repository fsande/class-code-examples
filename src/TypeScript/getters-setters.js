"use strict";
/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 11, 2023
  * @desc Accessors
  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
class Person {
    constructor(age, firstName, lastName) {
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getAge() {
        return this.age;
    }
    setAge(theAge) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this.age = theAge;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    age;
    firstName;
    lastName;
}
let main = async () => {
    const alan = new Person(102, 'Alan', 'Turing');
    console.log(alan.getFullName(), ' is ', alan.getAge(), ' years old.');
};
exports.main = main;
(0, exports.main)();
