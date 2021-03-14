/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 13.Mar.2021
 * @desc Class expression
 *       Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc.
 *       Assigning a class to a variable is called a class expression
 * @tutorial {@link https://javascript.info/class#class-expression}
 */

'use strict';

// This is an anonymous class expression -- you can't refer to it by name within the class body
const Food = class {
  constructor (name, protein, carbs, fat) {
    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
  }
  toString () {
    return `${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`
  }
  print () {
    console.log(this.toString());
  }
}

// "Named Class Expression"
// similar to Named Function Expression
let User = class MyClass {
  sayHi() {
    console.log(MyClass);
    // MyClass name is visible only inside the class
  }
};

let chickenBreast = new Food('Chicken Breast', 26, 0, 3.5);
console.log(chickenBreast.fat); 
new User().sayHi();   // works, shows MyClass definition
// console.log(MyClass); // error, MyClass name isn't visible outside of the class
