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
  * Experiment calling directly to gimmeFunction() instead of calling it through myFunction();
  *
  */

'use strict';

// @returns {function} Returns a function which prints the localVar
let gimmeFunction = function() {
  let localVar = "I'm in here!";

  return function() {
    console.log(localVar);
  }
}

let myFunction = gimmeFunction(); // assigns to myFunction the function returned by gimmeFunction()
myFunction();

// gimmeFunction();
