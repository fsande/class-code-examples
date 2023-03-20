"use strict";
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 2, 2023
 * @description Looping over arrays
 *       - The for..of doesn’t give access to the number of the current element, just its value, but in most cases that’s enough. And it’s shorter.
 *       - Technically, because arrays are objects, it is also possible to use for..in, But that’s actually a bad idea. There are potential problems with it:
 * @see {@link https://javascript.info/array#loops}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
function main() {
    let array = ['PAI', 3, 'CyA', 2, 'IB', 1];
    const LINE = '============================';
    // Classical for loop
    for (let i = 0; i < array.length; ++i) {
        console.log(array[i]);
    }
    console.log(LINE);
    // Classical for loop, caching length
    for (let i = 0, cLength = array.length; i < cLength; ++i) {
        console.log(array[i]);
    }
    console.log(LINE);
    // for-of PREFERRED
    for (const component of array) {
        console.log(component);
    }
    console.log(LINE);
    // forEach
    array.forEach(component => console.log(component));
    console.log(LINE);
    // for-in Not a good idea...
    for (let i in array) {
        console.log(array[i]);
    }
}
exports.main = main;
main();
