/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 14.Mar.2021
 * @desc Class syntax
 *       You create classes with the class keyword, followed by an identifier, and finally, a code block, called the class body. 
 *       These are called class declarations. 
 *       Class declarations that don't use the extends keyword are called base classes
 *       A few things to note:
 *          Classes can only contain method definitions, not data properties;
 *          When defining methods, you use shorthand method definitions;
 *          Unlike when creating objects, you do not separate method definitions in class bodies with commas; and
 *          You can refer to properties on instances of the class directly (Line A).
 *          
 * @tutorial {@link https://javascript.info/class}
 */

'use strict';

// Food is a base class (it doesn't use the extends keyword)
class Food {
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
    console.log( this.toString() );
  }
}

const chicken_breast = new Food('Chicken Breast', 26, 0, 3.5);
chicken_breast.print();              // →  'Chicken Breast | 26g P :: 0g C :: 3.5g F'
console.log(chicken_breast.protein); // →  26 (LINE A)
