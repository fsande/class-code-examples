/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 2, 2023
 * @desc Looping over arrays
 */

export function main(): void { 
  let array: (string | number)[] = ['PAI', 3, 'CyA', 2, 'IB', 1];
  const LINE: string = '============================';

  // Classical for loop
  for (let i = 0; i < array.length; ++i) {
    console.log(array[i]);
  }
  console.log(LINE);
  // Classical for loop, caching length
  for (let i = 0, cLength: number = array.length; i < cLength; ++i) {
    console.log(array[i]);
  }
  console.log(LINE);
  // for-in
  for (let i in array) {
    console.log(array[i]);
  }
  // for-of PREFERRED
  console.log(LINE);
  for (const component of array) {
    console.log(component);
  }
  console.log(LINE);
  // forEach
  array.forEach(component => console.log(component));
}

main();
