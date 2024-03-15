"use strict";
/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 26, 2023
  * @desc Class Types
  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
class Square {
    canEdit;
    constructor(canEdit) {
        this.canEdit = canEdit;
    }
    commitChanges() {
        if (this.canEdit) {
            console.log('changes committed');
        }
        else {
            console.log('The figure is not editable. Changes NOT committed');
        }
    }
    draw() {
        console.log('drawing');
    }
}
let main = async () => {
    const square = new Square(true);
    square.draw();
    square.commitChanges();
};
exports.main = main;
(0, exports.main)();
