"use strict";
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 17, 2023
 * @description Looping over arrays
 * @see {@link https://javascript.info/array#loops}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
/** @description with classic for loop and length caching */
function doubleArrayClassic(numbers) {
    for (let i = 0, LENGTH = numbers.length; i < LENGTH; ++i) {
        console.log(numbers[i] * 2);
    }
    return;
}
/** @description callback function to use with every */
const doubleIt = function (value) {
    console.log(2 * value);
    return;
};
/** @description with forEach */
function doubleArrayForEach(numbers) {
    numbers.forEach(doubleIt);
    return;
}
/** @description callback to use with every */
const doubleIfLessThan3 = function (value) {
    if (value >= 3)
        return false;
    console.log(2 * value);
    return true;
};
/** @description with every and simulating break */
function doubleArrayEvery(numbers) {
    numbers.every(doubleIfLessThan3);
    return;
}
/** @description with forEach and every using anonymous functions */
function doubleArrayAnonymous(numbers) {
    numbers.forEach(function (value) {
        console.log(2 * value);
    });
    printLine();
    numbers.every(function (value) {
        if (value >= 3)
            return false;
        console.log(2 * value);
        return true;
    });
    return;
}
function printLine() {
    console.log('=============================');
    return;
}
function main() {
    let numbers = [1, 2, 3, 4];
    doubleArrayClassic(numbers);
    printLine();
    doubleArrayForEach(numbers);
    printLine();
    doubleArrayEvery(numbers);
    printLine();
    doubleArrayAnonymous(numbers);
}
exports.main = main;
main();
