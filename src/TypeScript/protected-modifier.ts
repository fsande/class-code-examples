/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 11, 2023
  * @desc protected modifier
  *       To make the code shorter, TypeScript allows you to both declare properties and initialize them in the constructor like this:
  * @see https://www.typescripttutorial.net/typescript-tutorial/typescript-access-modifiers/
  */

class Person {
  constructor(protected socialSecurityNumber: string, private firstName: string, private lastName: string) {
    this.socialSecurityNumber = socialSecurityNumber;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public getFullName(): string {  // Default visibility is public
    return `${this.firstName} ${this.lastName}`; 
  }
}

export let main = async () => {
  const alan = new Person('153-07-3130', 'Alan', 'Turing');
  console.log(alan.getFullName());
  // console.log(alan.socialSecurityNumber);
};

main();
