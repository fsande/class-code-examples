"use strict";
/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 11, 2023
  * @desc Methods
  *       Other than the standard type annotations, TypeScript doesn’t add anything else new to methods.
  *       Note that inside a method body, it is still mandatory to access fields and other methods via this.
  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
class Point {
    coordX = 10;
    coordY = 10;
    scale(factor) {
        this.coordX *= factor;
        this.coordY *= factor;
    }
    toString() {
        return ('(' + this.coordX + ', ' + this.coordY + ')');
    }
}
let main = async () => {
    const point = new Point();
    point.scale(10);
    console.log('Point:', point.toString());
};
exports.main = main;
(0, exports.main)();
