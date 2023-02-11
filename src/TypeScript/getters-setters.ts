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

class Person {
  age: number;
  firstName: string;
  lastName: string;

  constructor(age: number, firstName: string, lastName: string) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getAge() {
    return this.age;
  }

  setAge(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error('The age is invalid');
    }
    this.age= theAge;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

export let main = async () => {
  const alan = new Person(102, 'Alan', 'Turing');
  console.log(alan.getFullName(), ' is ', alan.getAge(), ' years old.');
};

main();
