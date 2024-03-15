"use strict";
/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 11, 2023
  * @desc Super Calls
  *       if you have a base class, you’ll need to call super(); in your constructor body before using any this.
  * @see https://www.typescriptlang.org/docs/handbook/2/classes.html#super-calls
  */
class Base {
    field = 4;
}
class Derived extends Base {
    constructor() {
        // Prints a wrong value in ES5; throws exception in ES6
        console.log(this.field);
        super();
    }
}
