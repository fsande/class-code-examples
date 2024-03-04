/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 10, 2023
 * @description Class to illustrate the use of a Rectangle class
 *              It uses graphic capabilities using canvas
 *              [based on: Creating and Drawing on an HTML5 Canvas using JavaScript]
 * @see {@link https://codeburst.io/creating-and-drawing-on-an-html5-canvas-using-javascript-93da75f001c1}
 */
/** @classdesc A class to represent rectangles */
var Rectangle = /** @class */ (function () {
    /**
   * Create a rectangle
     * these are the arguments you pass in
   * add default values to avoid errors on empty arguments
   * @param {number} xPosition - X coord of the rectangle's position
   * @param {number} yPosition - Y coord of the rectangle's position
   * @param {number} width
   * @param {number} height
   * @param {string} fillColor
   * @param {string} strokeColor
   * @param {number} strokeWidth
   */
    function Rectangle(xPosition, yPosition, width, height, fillColor, strokeColor, strokeWidth) {
        if (xPosition === void 0) { xPosition = 0; }
        if (yPosition === void 0) { yPosition = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (fillColor === void 0) { fillColor = ''; }
        if (strokeColor === void 0) { strokeColor = ''; }
        if (strokeWidth === void 0) { strokeWidth = 2; }
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.width = width;
        this.height = height;
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
        this.strokeWidth = strokeWidth;
        // console.log('Constructor is executing...');
        // alert('Constructor is executing...');
    }
    /** draw rectangle to screen */
    Rectangle.prototype.draw = function () {
        // saves the current styles set elsewhere to avoid overwriting them
        Rectangle.context.save();
        // set the styles for this shape
        Rectangle.context.fillStyle = this.fillColor;
        Rectangle.context.lineWidth = this.strokeWidth;
        // create the *path*
        Rectangle.context.beginPath();
        Rectangle.context.strokeStyle = this.strokeColor;
        Rectangle.context.rect(this.xPosition, this.yPosition, this.width, this.height);
        // draw the path to screen
        Rectangle.context.fill();
        Rectangle.context.stroke();
        // restores the styles from earlier preventing the colors used here
        // from polluting other drawings
        Rectangle.context.restore();
    };
    /// All rectangles share (static) the same canvas and context
    Rectangle.canvas = document.getElementById('tutorial');
    Rectangle.context = Rectangle.canvas.getContext('2d');
    return Rectangle;
}());
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
