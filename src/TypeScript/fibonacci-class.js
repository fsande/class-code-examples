"use strict";
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Feb 14, 2023
 * @desc OOP Fibonacci.
 *       Computes the sum of all even tems under 1000 of the Fibonacci sequence
 *       Project Euler #2
 *
 * @see {@link https://en.wikipedia.org/wiki/Fibonacci_number}
 * @see {@link https://projecteuler.net/problem=2}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
/**
 * A class representing Fibonacci numbers generator
 * The next() method returns
 * The first term returned will be 1, so the sequence will be: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
 * The sequence commonly starts from 0 and 1, although some authors start the sequence from 1 and 1 (like here)
 */
class FibonacciGenerator {
    constructor() {
        this.f0 = 0; // Initial values of the sequence
        this.f1 = 1;
    }
    next() {
        const f2 = this.f0 + this.f1; // computes a new term to be returned 'in the future'
        this.f0 = this.f1;
        this.f1 = f2;
        return this.f0;
    }
    f0 = 0; // Term to be returned on each call
    f1 = 1; // Next term to be returned
}
let main = async () => {
    const LIMIT = 1000;
    let fibgen = new FibonacciGenerator();
    let sum = 0;
    for (let term = fibgen.next(); term < LIMIT; term = fibgen.next()) {
        if (term % 2 === 0)
            sum += term;
    }
    console.log('Sum = ', sum);
};
exports.main = main;
(0, exports.main)();
