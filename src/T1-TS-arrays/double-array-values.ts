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

/** @description with classic for loop and length caching */
function doubleArrayClassic(numbers: number[]): void {
  for(let i = 0, LENGTH = numbers.length; i < LENGTH; ++i) {
    console.log(numbers[i] * 2);
  }
  return;
}

/** @description callback function to use with every */
const doubleIt = function(value: number): void {
  console.log(2 * value);
  return;
}

/** @description with forEach */
function doubleArrayForEach(numbers: number[]): void {
  numbers.forEach(doubleIt)
  return;
}

/** @description callback to use with every */
const doubleIfLessThan3 = function(value: number): boolean {
  if (value >= 3) return false; 
  console.log(2 * value);
  return true;
}

/** @description with every and simulating break */
function doubleArrayEvery(numbers: number[]): void {
  numbers.every(doubleIfLessThan3);
  return;
}

export function main(): void { 
  let numbers: number[] = [1, 2, 3, 4];
  doubleArrayClassic(numbers);
  doubleArrayForEach(numbers);
  doubleArrayEvery(numbers);
}

main();
