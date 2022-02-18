/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 16.ene.2020
  * @desc Hoisting Example
  *
  * The output is 1000
  * The function declaration of inner is hoisted to the top of the enclosing scope
  * Which renders the first line of the function, inner = 5, a reassignment of the local inner, not the global
  */

'use strict';

var inner = 1000;
function outer () {
    inner = 5;
    function inner() {}
}
outer();
console.log(inner);


