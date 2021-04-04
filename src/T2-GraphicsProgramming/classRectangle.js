/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       F. de Sande
 * @since 20.feb.2020
 * @desc Class to illustrate the use of a Rectangle class
 * It uses graphic capabilities using canvas
 * 
 * [based on: Creating and Drawing on an HTML5 Canvas using JavaScript]
 *           {@link https://codeburst.io/creating-and-drawing-on-an-html5-canvas-using-javascript-93da75f001c1}
 */

/**
 * @desc setup canvas
 */
const CANVAS = document.getElementById('tutorial');
const ctx = CANVAS.getContext('2d');

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
  constructor ( x = 0, y = 0, width = 0, height = 0,
    fillColor = '', strokeColor = '', strokeWidth = 2
  ) {
    // ensure the arguments passed in are numbers
    // a bit overkill for this tutorial
    this.x = Number(x)
    this.y = Number(y)
    this.width = Number(width)
    this.height = Number(height)
    this.fillColor = fillColor
    this.strokeColor = strokeColor
    this.strokeWidth = strokeWidth
  }

  /**
   * @desc get keyword causes this method to be called when you use myRectangle.area
	 * @returns Area of the rectangle
   */
  getArea () {
    return this.width * this.height
  }

  // gets the X position of the left side
  getLeft () {
    // origin is at top left so just return x
    return this.x
  }

  // get X position of right side
  getRight () {
    // x is left position + the width to get end point
    return this.x + this.width
  }

  // get the Y position of top side
  getTop () {
    // origin is at top left so just return y
    return this.y
  }

  // get Y position at bottom
  getBottom () {
    return this.y + this.height
  }

  // draw rectangle to screen

  draw() {
    // destructuring
    const {
      x, y, width, height,
      fillColor, strokeColor, strokeWidth
    } = this

    // saves the current styles set elsewhere
    // to avoid overwriting them
    ctx.save()
  
    // set the styles for this shape
    ctx.fillStyle = fillColor
    ctx.lineWidth = strokeWidth

    // create the *path*
    ctx.beginPath()
    ctx.strokeStyle = strokeColor
    ctx.rect(x, y, width, height)

    // draw the path to screen
    ctx.fill()
    ctx.stroke()

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
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
// x: 450
// y: 100
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
