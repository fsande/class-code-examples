"use strict";
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 2, 2023
 * @desc slice example
 * @see @link{https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
function main() {
    let myArray = [2, 4, 6, 8];
    console.log(myArray.slice()); // →  [ 2, 4, 6, 8 ]
    console.log(myArray.slice(1)); // →  [ 4, 6, 8 ]
    console.log(myArray.slice(1, 3)); // →  [ 4, 6 ]
    console.log(myArray.slice(-1)); // →  [ 8 ]
    console.log(myArray); // →  [ 2, 4, 6, 8 ]
}
exports.main = main;
main();
