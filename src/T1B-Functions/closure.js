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
  * Functions retain access to their original scope, even when the outer function they were defined in has returned
  *
  */

'use strict';

let gimmeFunction = function() {
  let myVar = "I'm in here!";

  return function() {
    console.log(myVar);
  }
}

let myFunction = gimmeFunction();
myFunction();
