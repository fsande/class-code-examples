/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 10, 2023
 * @desc Class to illustrate the use of a Rectangle class
 *       It uses graphic capabilities using canvas
 * 
 * [based on: Creating and Drawing on an HTML5 Canvas using JavaScript]
 *           {@link https://codeburst.io/creating-and-drawing-on-an-html5-canvas-using-javascript-93da75f001c1}
 */


/**
 * @desc A class to represent rectangle objects
 * @class
 */
export class Rectangle {
  #xPosition = 0;
  #yPosition = 0;
  #width = 0; 
  #height = 0;
  #fillColor = ''; 
  #strokeColor = ''; 
  #strokeWidth = 2;
	/**
   * Create a rectangle
	 * these are the arguments you pass in
   * add default values to avoid errors on empty arguments
   * @constructor
   * @public
   * @param {number} xPosition - X coord of the rectangle's position
   * @param {number} yPosition - Y coord of the rectangle's position
   * @param {number} width  
   * @param {number} height  
   * @param {string} fillColor  
   * @param {string} strokeColor  
   * @param {number} strokeWidth  
   */
  constructor(xPosition = 0, yPosition = 0, width = 0, height = 0,
    fillColor = '', strokeColor = '', strokeWidth = 2
  ) {
    // console.log('Constructor is executing...');
    // alert('Constructor is executing...');
    // ensure the arguments passed in are numbers
    // a bit overkill for this tutorial
    this.#xPosition = Number(xPosition)
    this.#yPosition = Number(yPosition)
    this.#width = Number(width)
    this.#height = Number(height)
    this.#fillColor = fillColor
    this.#strokeColor = strokeColor
    this.#strokeWidth = strokeWidth
    /** setup canvas */
    const CANVAS = document.getElementById('tutorial');
    this.ctx = CANVAS.getContext('2d');
  }

  /**
   * @desc Rectangle Area
	 * @returns Area of the rectangle
   */
  getArea() {
    return this.#width * this.#height
  }

  /** gets the X position of the left side */
  getLeft() {
    // origin is at top left so just return x
    return this.#xPosition
  }

  /** get X position of right side */
  getRight() {
    // xPosition is left position + the width to get end point
    return this.#xPosition + this.#width
  }

  /** get the Y position of top side */
  getTop() {
    // origin is at top left so just return #yPosition
    return this.#yPosition
  }

  /** get Y position at bottom */
  getBottom() {
    return this.#yPosition + this.#height
  }

  /** draw rectangle to screen */
  draw() {
    // saves the current styles set elsewhere to avoid overwriting them
    this.ctx.save()
  
    // set the styles for this shape
    this.ctx.fillStyle = this.#fillColor
    this.ctx.lineWidth = this.#strokeWidth

    // create the *path*
    this.ctx.beginPath()
    this.ctx.strokeStyle = this.#strokeColor
    this.ctx.rect(this.#xPosition, this.#yPosition, this.#width, this.#height)

    // draw the path to screen
    this.ctx.fill()
    this.ctx.stroke()

    // restores the styles from earlier preventing the colors used here
    // from polluting other drawings
    this.ctx.restore()
  }
}
