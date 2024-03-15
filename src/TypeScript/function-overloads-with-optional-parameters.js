"use strict";
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Feb 14, 2023
 * @desc Function Overloads with optional parameters
 * @see {@link https://www.typescripttutorial.net/typescript-tutorial/typescript-function-overloadings/}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
function sum(sumand1, sumand2, sumand3) {
    if (sumand3)
        return sumand1 + sumand2 + sumand3;
    return sumand1 + sumand2;
}
let main = async () => {
    console.log(sum(2, 3));
    console.log(sum(2, 3, 5));
};
exports.main = main;
(0, exports.main)();
