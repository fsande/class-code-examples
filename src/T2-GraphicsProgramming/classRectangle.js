/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 20.Feb.2020 04.Apr.2021
 * @desc Class to illustrate the use of a Rectangle class
 *       All properties and methods are public !!!
 *       It uses graphic capabilities using canvas
 * 
 * [based on: Creating and Drawing on an HTML5 Canvas using JavaScript]
 *           {@link https://codeburst.io/creating-and-drawing-on-an-html5-canvas-using-javascript-93da75f001c1}
 */


/**
 * @desc A class to represent rectangle objects
 * @class
 */
class Rectangle {
	/**
   * Create a rectangle
	 * these are the arguments you pass in
   * add default values to avoid errors on empty arguments
   * @constructor
   * @public
   * @param {number} x - X coord of the rectangle's position
   * @param {number} y - Y coord of the rectangle's position
   * @param {number} width  
   * @param {number} height  
   * @param {string} fillColor  
   * @param {string} strokeColor  
   * @param {number} strokeWidth  
   */
  constructor ( xPosition = 0, yPosition = 0, width = 0, height = 0,
    fillColor = '', strokeColor = '', strokeWidth = 2
  ) {
    // ensure the arguments passed in are numbers
    // a bit overkill for this tutorial
    this.xPosition = Number(xPosition)
    this.yPosition = Number(yPosition)
    this.width = Number(width)
    this.height = Number(height)
    this.fillColor = fillColor
    this.strokeColor = strokeColor
    this.strokeWidth = strokeWidth
    /** setup canvas */
    const CANVAS = document.getElementById('tutorial');
    this.ctx = CANVAS.getContext('2d');
  }

  /**
   * @desc Rectangle Area
	 * @returns Area of the rectangle
   */
  getArea () {
    return this.width * this.height
  }

  /** gets the X position of the left side */
  getLeft () {
    // origin is at top left so just return x
    return this.xPosition
  }

  /** get X position of right side */
  getRight () {
    // xPosition is left position + the width to get end point
    return this.xPosition + this.width
  }

  /** get the Y position of top side */
  getTop () {
    // origin is at top left so just return yPosition
    return this.yPosition
  }

  /** get Y position at bottom */
  getBottom () {
    return this.yPosition + this.height
  }

  /** draw rectangle to screen */
  draw() {
    // destructuring
    const {
      xPosition, yPosition, width, height,
      fillColor, strokeColor, strokeWidth
    } = this

    // saves the current styles set elsewhere
    // to avoid overwriting them
    this.ctx.save()
  
    // set the styles for this shape
    this.ctx.fillStyle = fillColor
    this.ctx.lineWidth = strokeWidth

    // create the *path*
    this.ctx.beginPath()
    this.ctx.strokeStyle = strokeColor
    this.ctx.rect(xPosition, yPosition, width, height)

    // draw the path to screen
    this.ctx.fill()
    this.ctx.stroke()

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    this.ctx.restore()
  }
}

// create a new rectangle object using the Rectangle class
const mySquare1 = new Rectangle(400, 85, 50, 50, 'gold');
const mySquare2 = new Rectangle(50, 35, 50, 50, 'blue');
const mySquare3 = new Rectangle(125, 35, 50, 50, 'red');
const mySquare4 = new Rectangle(200, 35, 50, 50, 'black');


// now we have data and methods to describe our square
console.log(mySquare1)
// Object
// fillColor: "gold"
// height: 50
// strokeColor: ""
// strokeWidth: 2
// width: 50
// xPosition: 450
// yPosition: 100
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
