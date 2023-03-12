/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Feb 20, 2020 
 * @since Feb 26, 2021
 * @since Mar 7, 2023
 * @version 3
 * @description TS Object Oriented Analog HTML-Canvas based Clock
 * @tutorial Adapted from {@link https://www.w3schools.com/graphics/canvas_clock.asp}
 * Also, check out {@link https://gist.github.com/fixiecoder/a6146501aaa8ad3bf885fa30a66ba079}
 */

/** @classdesc Represents an analog clock */
class Clock {
  /**
   * @description Creates a clock
   * @param containerElement - The HTML that will include the clock
   * @param size - clock size
   */
  constructor(
      private readonly containerElement: HTMLElement, 
      private readonly size: number,
      // By default document.createElement returns a HTMLElementtype which is a generic type.
      // In order to make your app understand it is a canvas element you need to cast it 
      private readonly canvas: HTMLCanvasElement = document.createElement('CANVAS') as HTMLCanvasElement, // Creates A new HTML element: a canvas
      private readonly context: CanvasRenderingContext2D = canvas.getContext('2d'),
      private radius: number = 0,
      private centerX: number = 0,
      private centerY: number = 0) { // Body
    this.radius = 0.95 * (this.size / 2);
    this.canvas.width = this.size;
    this.canvas.height = this.size;
    this.containerElement.appendChild(this.canvas); // Adds the canvas HTML element as a 'child' of the containerElement (body)
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
    this.context.translate(this.centerX, this.centerY);
    this.renderArrow();
  }

  /**
   * @description Draws the clock face
   * @param context - Canvas Drawing Context
   */
  private drawClockFace(context: CanvasRenderingContext2D): void {
    // Draw the white clock Face
    context.beginPath();
    context.arc(0, 0, this.radius, 0, 2 * Math.PI);
    context.fillStyle = 'white';
    context.fill();
    return;
  }

  /** @description Draws the clock and performs it's animation */
  public renderArrow = (): void => {
    this.drawClockFace(this.context);
    return;
  }
}

let clock: Clock = new Clock(document.body, 800);
