/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 10, 2023
 * @desc Client program for the Rectangle class
 * 
 */

// You can't use import from outside a module.
// That's the reason why we have to use type="module" in the HTML code
// that loads this JS script.
import {Rectangle} from './classRectangle';

const main = function () {
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


