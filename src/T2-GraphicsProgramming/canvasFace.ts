/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande <fsande@ull.es>
 * @since Mar 9, 2023
 * @version 1
 * @description Drawing a Face on HTML canvas
 */

/** @classdesc A class for drawing a Face */
class Face {
  /** @description Creates the canvas drawing context */
  constructor(
    private canvas: HTMLCanvasElement = document.getElementById('tutorial') as HTMLCanvasElement,
    private context: CanvasRenderingContext2D = canvas.getContext('2d')) { }

  public draw(): void {
    this.context.beginPath();
    this.context.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    // this.context.moveTo(110, 75);
    this.context.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    // this.context.moveTo(65, 65);
    this.context.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    // this.context.moveTo(95, 65);
    this.context.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    this.context.stroke();
  }
}

function main(): void { 
  const face = new Face();
  face.draw();
}

main();
