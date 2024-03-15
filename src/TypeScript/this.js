"use strict";
/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 26, 2023
  * @desc TS classes.
  *       this
  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
class Leaf {
    color = 'green';
    changeColor(season) {
        console.log('original color: ' + this.color);
        switch (season) {
            case 'winter':
                this.color = 'brown';
                break;
            case 'autumn':
            case 'fall':
                this.color = 'red';
                break;
            case 'spring':
                this.color = 'bright green';
                break;
            default:
                this.color = 'dark green';
                break;
        }
        console.log('new color: ' + this.color);
    }
}
let main = async () => {
    let bibLeaf = new Leaf();
    bibLeaf.changeColor('fall');
};
exports.main = main;
(0, exports.main)();
