"use strict";
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Feb 14, 2023
 * @desc Function Overloads
 *       In this example, we wrote two overloads: one accepting one argument, and another accepting three arguments.
 *       These first two signatures are called the overload signatures.
 *       Then, we wrote a function implementation with a compatible signature.
 *       Functions have an implementation signature, but this signature can’t be called directly.
 *       Even though we wrote a function with two optional parameters after the required one,
 *       it can’t be called with two parameters!
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
function makeDate(mOrTimestamp, day, year) {
    if (day !== undefined && year !== undefined) {
        return new Date(year, mOrTimestamp, day);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
let main = async () => {
    const DATE1 = makeDate(12345678);
    const DATE2 = makeDate(5, 5, 5);
    const DATE3 = makeDate(1, 3); // Function can't be called with 2 arguments
};
exports.main = main;
(0, exports.main)();
