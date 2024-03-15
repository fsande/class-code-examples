"use strict";
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Feb 14, 2023
 * @desc Default parameters
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
/**
 * @desc Returns true if the argument is a leap year
 * @param {number} - year to evaluate
 * @return {boolean} - True if year is leap, false otherwise
 * @see {@link https://www.alphabetacoder.com/2021/01/c-program-to-check-if-year-is-leap-year-or-not.html}
 */
const isLeap = (year) => {
    return (((year % 4 == 0) && !(year % 100 == 0)) || (year % 400 == 0));
};
/**
 * Returns the number of days in a month for a given year
 * @param {number} - year of the date. Defaults to current year
 * @param {number} - month of the date
 * @return {number} - The number of days in month/year
 * @see {@link https://www.typescripttutorial.net/typescript-tutorial/typescript-default-parameters/}
 */
const numberOfDays = (year = new Date().getFullYear(), month) => {
    let day = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2: // leap year
            if (isLeap(year)) {
                day = 29;
            }
            else {
                day = 28;
            }
            break;
        default:
            throw Error('Invalid month');
    }
    return day;
};
let main = async () => {
    console.log(numberOfDays(2019, 2));
    console.log(numberOfDays(undefined, 2));
};
exports.main = main;
(0, exports.main)();
