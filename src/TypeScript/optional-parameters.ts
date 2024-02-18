/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 11, 2023
  * @desc TS classes. 
  *       Optional parameters in methods
  */

class Dog {    
  age: number;        
  name: string;    
  favoriteToy: string;    
  constructor(age: number, name: string, favoriteToy?: string) {        
    this.age = age;        
    this.name = name;        
    if (favoriteToy !== undefined) {            
      this.favoriteToy = favoriteToy;        
    }
    else {
      this.favoriteToy = 'ball';        
    }
  }
}

export let main = async () => {
  let germanShepherd: Dog = new Dog(7, 'Lucky');
  let chihuahua: Dog = new Dog(4, 'Osita', 'squeaky bone');
};

main();
