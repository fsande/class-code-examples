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
 * @see Triple-Slash Directives {@link * https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html}
 * @see Compiling TypeScript project composed of many files/modules to single file {@link https://stackoverflow.com/q/22336763/12791643}
 */
///<reference path='rectangle.ts'/>
var main = function () {
    // creates rectangle objects 
    var mySquare1 = new Rectangle(400, 85, 200, 200, 'gold'); // (x, y, width, height, color)
    var mySquare2 = new Rectangle(50, 35, 50, 50, 'blue');
    var mySquare3 = new Rectangle(125, 35, 50, 50, 'red');
    var mySquare4 = new Rectangle(200, 35, 100, 100, 'black');
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
