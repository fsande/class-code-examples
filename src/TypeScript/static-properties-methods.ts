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

class Employee {
  private static headcount: number = 0;  // A private property is shared among all instances of a class.
                                         // This value cannot be changed outside of the class 
  constructor(private firstName: string, private lastName: string, private jobTitle: string) {
    Employee.headcount++;
  }
  public static getHeadcount() {
    return Employee.headcount;
  }
}

export let main = async () => {
  const alan = new Employee('Alan', 'Turing', 'Front-end Developer');
  const noam = new Employee('Noam', 'Chomsky', 'Back-end Developer');
  const john = new Employee('John', 'Von Neuman', 'Team leader');
  console.log(Employee.getHeadcount());  // The static method is shared by all instances
};

main();
