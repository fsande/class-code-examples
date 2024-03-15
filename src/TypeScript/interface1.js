"use strict";
/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 26, 2023
  * @desc Interfaces
  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
function printSize(dimension) {
    console.log('The image width is ' + dimension.width);
    console.log('The image height is ' + dimension.height);
}
let main = async () => {
    let image = {
        width: '200px',
        height: '300px'
    };
    printSize(image);
};
exports.main = main;
(0, exports.main)();
