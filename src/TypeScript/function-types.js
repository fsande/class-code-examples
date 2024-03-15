"use strict";
/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 26, 2023
  * @desc Function Types
  *       The StringFormat interface ensures that all the callers of the function that implements it pass in the required arguments: a string and a boolean.
  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
let main = async () => {
    let format;
    format = function (str, isUpper) {
        return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
    };
    console.log(format('En un lugar de la Mancha', true));
    console.log(format('To Be or Not To Be', false));
};
exports.main = main;
(0, exports.main)();
