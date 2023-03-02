/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 2, 2023
 * @desc Arrays mutability
 */

export function main(): void { 
  let a = [1, 2, 3];
  let b = a;
  a.push(4);
  console.log(b);
}

main();
