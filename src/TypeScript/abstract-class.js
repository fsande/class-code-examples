"use strict";
/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 26, 2023
  * @desc Abstract class
  *       The constructor declares the firstName and lastName properties.
  *       The getSalary() method is an abstract method.
  *         The derived class will implement the logic based on the type of employee.
  *       The getFullName() and compensationStatement() methods contain detailed implementation.
  *         Note that the compensationStatement() method calls the getSalary() method.
  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
class Employee {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getfullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement() {
        return `${this.getfullName()} makes ${this.getSalary()} a month.`;
    }
}
class FullTimeEmployee extends Employee {
    salary;
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
class Contractor extends Employee {
    rate;
    hours;
    constructor(firstName, lastName, rate, hours) {
        super(firstName, lastName);
        this.rate = rate;
        this.hours = hours;
    }
    getSalary() {
        return this.rate * this.hours;
    }
}
let main = async () => {
    // const employee = new Employee('Alan', 'Turing', 'Front-end Developer'); // This is an error, because Employee is abstract
    const alan = new Contractor('Alan', 'Turing', 100, 160);
    const noam = new FullTimeEmployee('Noam', 'Chomsky', 12000);
    console.log(alan.compensationStatement());
    console.log(noam.compensationStatement());
};
exports.main = main;
(0, exports.main)();
