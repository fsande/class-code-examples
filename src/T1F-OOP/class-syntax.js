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
 *          Set all of a concrete object’s fields (i.e. all properties other than methods) in the constructor. 
 *          Annotate fields that are never reassigned with @const (these need not be deeply immutable). 
 *          Annotate non-public fields with the proper visibility annotation (@private, @protected, @package), 
 *          and end all @private fields' names with an underscore. 
 *
 *          Properties should never be added to or removed from an instance after the constructor is finished, 
 *          since it significantly hinders VMs’ ability to optimize. 
 *          If necessary, fields that are initialized later should be explicitly set to undefined in the 
 *          constructor to prevent later shape changes. 
 *          
 * @tutorial {@link https://javascript.info/class}
 *           {@link https://google.github.io/styleguide/jsguide.html#features-classes}
 *           {@link https://www.healthline.com/nutrition/calories-in-chicken#breast}
 */

'use strict';

/** Food is a base class (it doesn't use the extends keyword) */
class Food {

  constructor (name, protein, carbs, fat) {
    /** @property {string} name - The name of the food */
    this.name = name;
    /** @property {number} protein - Grams of proteins in 100g*/
    this.protein = protein;
    /** @property {number} carbs - Grams of carbs in 100g */
    this.carbs = carbs;
    /** @property {number} fat - Grams of fat in 100g */
    this.fat = fat;
  }

  /**
   * Returns a string with the representation of the object
   * @return {string} 
   */
  toString() {
    return `${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`
  }

  /**
   * Prints the string representation of the object. Calls toString()
   */
  print() {
    console.log(this.toString());
  }
}

const chicken_breast = new Food('Chicken Breast', 31, 0, 3.6);
chicken_breast.print();              // →  Chicken Breast | 31g P :: 0g C :: 3.6g F
console.log(chicken_breast.protein); // →  31 (LINE A)

