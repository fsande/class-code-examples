/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 20.feb.2020
 * @desc Canvas Clock
 * @tutorial Adapted from {@link https://www.w3schools.com/graphics/canvas_clock.asp Canvas Clock}
 */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const RADIUS = (canvas.height / 2) * 0.90;
ctx.translate(RADIUS, RADIUS);

function drawFace(ctx, RADIUS) {
  // Draw the white circle:
  ctx.beginPath();
  ctx.arc(0, 0, RADIUS, 0, 2 * Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();

  // Create a radial gradient (95% and 105% of radius):
  //                   createRadialGradient(x0, y0, r0,          x1, y1, r1);
  const GRADIENT = ctx.createRadialGradient(0,  0, RADIUS * 0.95, 0, 0, RADIUS * 1.05);

	// Create 3 color stops, corresponding with the inner, middle, and outer edge of the arc:
  GRADIENT.addColorStop(0, '#333');
  GRADIENT.addColorStop(0.5, 'white');
  GRADIENT.addColorStop(1, '#333');
 
  // Define the gradient as the stroke style of the drawing object:
	ctx.strokeStyle = GRADIENT;
  ctx.lineWidth = RADIUS * 0.1;
  ctx.stroke();

  // Draw the clock center:
  ctx.beginPath();
  ctx.arc(0, 0, RADIUS * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawClock() {
  drawFace(ctx, RADIUS);
}

drawClock();
