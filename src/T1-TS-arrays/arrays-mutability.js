"use strict";
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 2, 2023
 * @desc Arrays mutability
 *       Arrays are just objects anyway (so, yeah, they're mutable)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
function main() {
    let myArray = [1, 2, 3];
    let another = myArray;
    myArray.push(4);
    console.log(another);
}
exports.main = main;
main();
