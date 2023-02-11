/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 11, 2023
  * @desc TS classes. Method example
  */

class Dog {    
  name: string = '';    
  age: number = 0;     
  makeNoise(): void {        
    console.log('woof woof');    
  }
} 

export let main = async () => {
  let toby: Dog = new Dog();
  toby.makeNoise();
};

main();
