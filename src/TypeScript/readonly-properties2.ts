/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 11, 2023
  * @desc readonly properties
  *       The readonly modifier allows to mark the properties of a class immutable
  *       The assignment to a readonly property can only occur in one of two places:
  *        - In the property declaration
  *        - In the constructor of the same class
  * @see https://www.typescripttutorial.net/typescript-tutorial/typescript-readonly/
  */

class Person {
  readonly birthDate: Date;

  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}

export let main = async () => {
  const person = new Person(new Date(1990, 12, 25));
  person.birthDate = new Date(1991, 12, 25); // Compile error
};

main();
