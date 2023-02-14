/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Feb 14, 2023
 * @desc Function Overloads with optional parameters
 * @see {@link https://www.typescripttutorial.net/typescript-tutorial/typescript-function-overloadings/}
 */

/**
 * Returns a Date object built from the parameters
 * @param {number} - sumand1
 * @param {number} - sumand2
 * 
 * @param {number} - sumand1
 * @param {number} - sumand2
 * @param {number} - sumand3
 * 
 * @return {number} - The sum of the parameters
 */
function sum(sumand1: number, sumand2: number): number;
function sum(sumand1: number, sumand2: number, sumand3: number): number;
function sum(sumand1: number, sumand2: number, sumand3?: number): number {
    if (sumand3) return sumand1 + sumand2 + sumand3;
    return sumand1 + sumand2;
}

export let main = async () => {
  console.log(sum(2, 3));
  console.log(sum(2, 3, 5));
};

main();
