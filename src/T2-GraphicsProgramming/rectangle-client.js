"use strict";
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
exports.__esModule = true;
// You can't use import from outside a module.
// That's the reason why we have to use type="module" in the HTML code
// that loads this JS script.
var classRectangle_1 = require("./classRectangle");
var main = function () {
    // creates rectangle objects 
    var mySquare1 = new classRectangle_1.Rectangle(400, 85, 200, 200, 'gold'); // (x, y, width, height, color)
    var mySquare2 = new classRectangle_1.Rectangle(50, 35, 50, 50, 'blue');
    var mySquare3 = new classRectangle_1.Rectangle(125, 35, 50, 50, 'red');
    var mySquare4 = new classRectangle_1.Rectangle(200, 35, 100, 100, 'black');
    // now we have data and methods to describe our square
    console.log(mySquare1);
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
};
main();
