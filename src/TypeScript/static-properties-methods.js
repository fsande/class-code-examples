"use strict";
/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 26, 2023
  * @desc Static properties and methods
  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
class Employee {
    firstName;
    lastName;
    jobTitle;
    constructor(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        Employee.headcount++;
    }
    static getHeadcount() {
        return Employee.headcount;
    }
    static headcount = 0; // A static property is shared among all instances of a class.
}
let main = async () => {
    const alan = new Employee('Alan', 'Turing', 'Front-end Developer');
    const noam = new Employee('Noam', 'Chomsky', 'Back-end Developer');
    const john = new Employee('John', 'Von Neuman', 'Team leader');
    console.log(Employee.getHeadcount()); // The static method is shared by all instances
};
exports.main = main;
(0, exports.main)();
