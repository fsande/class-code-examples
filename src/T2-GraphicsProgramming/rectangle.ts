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
class Rectangle {
  /// All rectangles share (static) the same canvas and context
  private static canvas: HTMLCanvasElement = document.getElementById('tutorial') as HTMLCanvasElement;
  private static context: CanvasRenderingContext2D = Rectangle.canvas.getContext('2d');
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
  constructor(
    private xPosition: number = 0, 
    private yPosition: number = 0, 
    private width: number = 0, 
    private height: number = 0,
    private fillColor: string = '', 
    private strokeColor: string = '', 
    private strokeWidth: number = 2) {
      // console.log('Constructor is executing...');
      // alert('Constructor is executing...');
  }

  /** draw rectangle to screen */
  public draw(): void {
    // saves the current styles set elsewhere to avoid overwriting them
    Rectangle.context.save()
  
    // set the styles for this shape
    Rectangle.context.fillStyle = this.fillColor
    Rectangle.context.lineWidth = this.strokeWidth

    // create the *path*
    Rectangle.context.beginPath()
    Rectangle.context.strokeStyle = this.strokeColor
    Rectangle.context.rect(this.xPosition, this.yPosition, this.width, this.height)

    // draw the path to screen
    Rectangle.context.fill()
    Rectangle.context.stroke()

    // restores the styles from earlier preventing the colors used here
    // from polluting other drawings
    Rectangle.context.restore()
  }
}
