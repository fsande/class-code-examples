
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 10, 2023
 * @description Client program for the Rectangle class
 *              Compile using: tsc --out rectangle.js rectangle-client.ts
 * @see {@link https://stackoverflow.com/questions/71621472/compile-typescript-to-run-in-the-browser-using-modules}
 *              Ha de tenerse en cuenta que:
 *              - El proyecto ha de compilarse usando tsc (sin pasar parámetros, ni el nombre del fichero a compilar) para que tsc utilice la información del tsconfig.json
 *              - El código HTML ha de usar la etiqueta incluyendo type="module" (véase rectangulo.html)
 *              - El código del programa cliente ha de importar el módulo poniendo explícitamente 
 *                la extensión .js del fichero importado (sentencia import {Rectangle} from './rectangle.js'; )
 *              - En el fichero tsconfig ha de usarse "module": "es2015",
 *              - La página rectangulo.html no funciona si se carga directamente desde un navegador, 
 *                sino que ha de utilizarse un servidor para alojarla (el que configuraron en su máquina 
 *                virtual o bien usar la extensión live server de VSC).
 */

import {Rectangle} from './rectangle.js';

const main = function (): void {
  // creates rectangle objects 
  const mySquare1 = new Rectangle(400, 85, 200, 200, 'gold'); // (x, y, width, height, color)
  const mySquare2 = new Rectangle(50, 35, 50, 50, 'blue');
  const mySquare3 = new Rectangle(125, 35, 50, 50, 'red');
  const mySquare4 = new Rectangle(200, 35, 100, 100, 'black');

  // now we have data and methods to describe our square
  console.log(mySquare1)
  // Object
  // #fillColor: "gold"
  // #height: 50
  // #strokeColor: ""
  // #strokeWidth: 2
  // #width: 50
  // #xPosition: 450
  // #yPosition: 100
  // area: (...)
  // bottom: (...)
  // left: (...)
  // right: (...)
  // top: (...)

  // draw the square data to screen
  mySquare1.draw();
  mySquare2.draw();
  mySquare3.draw();
  mySquare4.draw();
}

main();
