"use strict";
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 5, 2023
 * @desc Callback example
 *       Function callback passed as param to mySandwidh is a callback
 *       The callback executes at the end of mySandwich call
 * @see {@link https://stackoverflow.com/a/40407344}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
/** @desc The callback function. Implements the Printer interface */
function printer(message) {
    console.log(message);
}
/** @desc function using a callback as a parameter */
function mySandwich(ingredient1, ingredient2, callback) {
    console.log('Started eating my sandwich.\n\nIt has: ' + ingredient1 + ', ' + ingredient2);
    callback('Finished eating my sandwich.');
}
function main() {
    // Call to function passing a callback
    mySandwich('ham', 'cheese', printer);
}
exports.main = main;
main();
