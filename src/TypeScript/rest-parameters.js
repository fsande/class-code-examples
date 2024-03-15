"use strict";
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Feb 14, 2023
 * @desc Rest parameteres
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
/**
 * Returns the sum of all elements in the (rest) array parameter
 * @param {number[]} - array of numbers to sum (rest parameter)
 * @return {number} - The sum of all elements in the array
 * @see {@link https://www.typescripttutorial.net/typescript-tutorial/typescript-rest-parameters/}
 */
const getTotal = (...numbers) => {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
};
let main = async () => {
    console.log(getTotal());
    console.log(getTotal(10, 20));
    console.log(getTotal(10, 20, 30));
};
exports.main = main;
(0, exports.main)();
