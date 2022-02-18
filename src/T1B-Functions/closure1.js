/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 16.ene.2020
  * @desc Closure example
  *
  */

'use strict';

let misteryFunction = function() {
  let localVar = 'This is my value';

  return function() {
    console.log(localVar);
  }
}

let myFunction = misteryFunction();
myFunction();
