"use strict";
/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 26, 2023
  * @desc Inheritance
  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
class Person {
    firstName;
    lastName;
    // Class properties are declared and initialized in the constructor
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    describe() {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}
class Employee extends Person {
    jobTitle;
    constructor(firstName, lastName, jobTitle) {
        // call the constructor of the Person class:
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }
    describe() {
        return super.describe() + ` I'm a ${this.jobTitle}.`;
    }
}
let main = async () => {
    const alan = new Employee('Alan', 'Turing', 'Front-end Developer');
    console.log(alan.getFullName());
    console.log(alan.describe());
};
exports.main = main;
(0, exports.main)();
