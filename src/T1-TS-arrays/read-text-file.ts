
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 19, 2023
 * @description Reading a text file
 * @see {@link https://nodejs.org/en/knowledge/file-system/how-to-read-files-in-nodejs/}
 */

import * as file from 'fs';

const main = function(): void {
  let buffer: string = file.readFileSync('input.txt', 'utf8');
  for (const char of buffer) {
    console.log(char);
  }
  const myArray = buffer.split(' ');
  console.log(myArray);
}

main();
