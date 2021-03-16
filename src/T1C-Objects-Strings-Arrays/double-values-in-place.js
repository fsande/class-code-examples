/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 20.ene.2020
  * @desc Double values in place
  *
  */

'use strict';

let numbers = [1, 2, 3];
let doubleValuesInPlace = function(arr) {
  for(let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
};
result = doubleValuesInPlace(numbers);
console.log(numbers);
console.log(typeof(result));
