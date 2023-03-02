/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 2, 2023
 * @desc splice example
 * @see @link{https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice}
 */


export let main = async () => {
  let myArray = [2, 4, 6, 8, 10, 12];
  console.log(myArray.splice(2));           // →  [ 6, 8, 10, 12 ]
  console.log(myArray);                     // →  [ 2, 4 ]

  myArray = [2, 4, 6, 8, 10, 12];
  console.log(myArray.splice(2, 2));        // →  [ 6, 8 ]
  console.log(myArray);                     // →  [ 2, 4, 10, 12 ]

  myArray = [2, 4, 6, 8, 10, 12];
  console.log(myArray.splice(-2));          // →  [ 10, 12 ]
  console.log(myArray);                     // →  [ 2, 4, 6, 8 ]

  myArray = [2, 4, 6, 8, 10, 12];
  console.log(myArray.splice(2, 2, 1, 1));  // →  [ 6, 8 ]
  console.log(myArray);                     // →  [ 2, 4, 1, 1, 10, 12 ]
};

main();
