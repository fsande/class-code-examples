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

class Person {
  // Class properties are declared and initialized in the constructor
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}

class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
      // call the constructor of the Person class:
      super(firstName, lastName);
  }
  describe(): string {
    return super.describe() + ` I'm a ${this.jobTitle}.`;
  }
}

export let main = async () => {
  const alan = new Employee('Alan', 'Turing', 'Front-end Developer');
  console.log(alan.getFullName());
  console.log(alan.describe());
};

main();
