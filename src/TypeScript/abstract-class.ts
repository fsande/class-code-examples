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

abstract class Employee {
  constructor(private firstName: string, private lastName: string) { }
  abstract getSalary(): number
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()} a month.`;
  }
}

class FullTimeEmployee extends Employee {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }
  getSalary(): number {
    return this.salary;
  }
}

class Contractor extends Employee {
  constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
    super(firstName, lastName);
  }
  getSalary(): number {
    return this.rate * this.hours;
  }
}

export let main = async () => {
  // const employee = new Employee('Alan', 'Turing', 'Front-end Developer'); // This is an error, because Employee is abstract
  const alan = new Contractor('Alan', 'Turing', 100, 160); 
  const noam = new FullTimeEmployee('Noam', 'Chomsky', 12000);
  console.log(alan.compensationStatement());
  console.log(noam.compensationStatement());
};

main();
