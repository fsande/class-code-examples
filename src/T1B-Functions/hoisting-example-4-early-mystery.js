/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 16.ene.2020
  * @desc 
  * @desc Hoisting Example
  *       We know that the declaration of f is hoisted
  *       But it has no value at the point that it is invoked/called (it's undefined)
  *       Consequently, the program is attempting to use undefined as a function
  */

'use strict';

f();

var f = function(x) {
  console.log('hello ' + x);
}
