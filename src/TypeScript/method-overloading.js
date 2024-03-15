"use strict";
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Feb 14, 2023
 * @desc Method overloading
 * @see {@link https://www.typescripttutorial.net/typescript-tutorial/typescript-function-overloadings/}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
/**
 * A class representing a counter
 * The count() method is overloaded. It returns a single number (counter) or an array
 */
class Counter {
    current = 0;
    count(target) {
        if (target) {
            let values = [];
            for (let value = this.current; value <= target; value++) {
                values.push(value);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}
let main = async () => {
    let counter = new Counter();
    console.log(counter.count()); // return a number
    console.log(counter.count(10)); // return an array
};
exports.main = main;
(0, exports.main)();
