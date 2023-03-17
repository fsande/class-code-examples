/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 2, 2023
 * @desc Arrays mutability
 *       Arrays are just objects anyway (so, yeah, they're mutable)
 */

export function main(): void { 
  let myArray: number[]  = [1, 2, 3];
  let another: number[]  = myArray;
  myArray.push(4);
  console.log(another);
}

main();
