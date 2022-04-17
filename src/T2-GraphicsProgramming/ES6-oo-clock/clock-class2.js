/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 20.feb.2020, 26.02.2021
 * @version 2
 * @desc ES6 Object Oriented Analog Canvas based Clock
 * @tutorial Adapted from {@link https://www.w3schools.com/graphics/canvas_clock.asp}
 * Also, check out {@link https://gist.github.com/fixiecoder/a6146501aaa8ad3bf885fa30a66ba079}
 */

'use strict';

/**
 * An ES6 class representing an analog clock that is drawn on a page using HTML Canvas
 * @class
 */
class Clock {
  /** @private */
	/** All properties are private */
	/** All the properties will be defined in the constructor */
  #centerX = undefined;
  #centerY = undefined;
  #radius = undefined;
  #canvas = document.createElement("CANVAS");  // A new HTML element
	#ctx = this.#canvas.getContext('2d');

  /**
   * Create a clock
	 * @constructor
	 * @public
   * @param {object} containerElement - The HTML element that contains the clock
   * @param {number} size - Size in pixels of the square in which the clock is inscribed
   */
  constructor(containerElement, size) {
    this.#radius = 0.95 * (size / 2);
    this.#canvas.width = size;
    this.#canvas.height = size;
    containerElement.appendChild(this.#canvas);
    this.#centerX = this.#canvas.width / 2;
    this.#centerY = this.#canvas.height / 2;
    this.#ctx.translate(this.#centerX, this.#centerY);

    this.render = this.render.bind(this);
    this.render();
  }

  /**
   * Draws the clock face
   * @param {Object} ctx - Canvas Drawing Context
   */
  #drawClockFace(ctx) {
	  const FILL_STYLE = '#7fffd4';  // For gradient (external ring)

    // Draw the white clock Face
    ctx.beginPath();
    ctx.arc(0, 0, this.#radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();

    // Create a radial gradient (95% and 105% of radius):
    //                 createRadialGradient(x0, y0, r0,                 x1, y1, r1);
    let gradient = ctx.createRadialGradient(0,   0, this.#radius * 0.95, 0,  0, this.#radius * 1.05);

		// Create 3 color stops, corresponding with the inner, middle, and outer edge of the arc:
    gradient.addColorStop(0, FILL_STYLE);
    gradient.addColorStop(0.5, 'white');
    gradient.addColorStop(1, FILL_STYLE);

    // Define the gradient as the stroke style of the drawing object:
    ctx.strokeStyle = gradient;
    ctx.lineWidth = this.#radius * 0.1;
    ctx.stroke();

    // Draw the cental black button
    ctx.beginPath();
    ctx.arc(0, 0, this.#radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = FILL_STYLE;
    ctx.fill();
  }

  /** Draws the clock */
  render() {
    this.#drawClockFace(this.#ctx);
  }
}

// https://www.w3schools.com/jsref/prop_doc_body.asp
// constructor(containerElement, size)
let clock = new Clock(document.body, 800);
