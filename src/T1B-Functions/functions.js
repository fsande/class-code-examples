/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 16.ene.2020
	* @desc Functions in JS
	*
  */

"use strict";

let readlineSync = require('/home/fsande/.node_modules_global/lib/node_modules/readline-sync/');

const square = function(x) {
  return x * x;
};

const makeNoise = function() {
  console.log("Pling!");
};

const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};


let number = readlineSync.question('Introduce a number: ');
console.log(square(10));
makeNoise();
console.log(power(2, 10));
