"use strict";
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 2, 2023
 * @desc Use of slice to copy
 *       A common way of duplicating an Array is to use slice
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
function main() {
    let myArray = [1, 2, 3];
    let other = myArray.slice();
    myArray.push(4);
    console.log(other);
}
exports.main = main;
main();
