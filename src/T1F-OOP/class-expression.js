/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 13.Mar.2021
 * @desc Class expression
 * @tutorial {@link https://javascript.info/class#class-expression}
 */

'use strict';

// "Named Class Expression"
// similar to Named Function Expression
let User = class MyClass {
  sayHi() {
    console.log(MyClass);
    // MyClass name is visible only inside the class
  }
};

new User().sayHi();   // works, shows MyClass definition
// console.log(MyClass); // error, MyClass name isn't visible outside of the class
