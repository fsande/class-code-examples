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
  ctx.beginPath();
  ctx.arc(0, 0, RADIUS, 0, 2 * Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();

  const GRADIENT = ctx.createRadialGradient(0, 0 ,RADIUS * 0.95, 0, 0, RADIUS * 1.05);
  GRADIENT.addColorStop(0, '#333');
  GRADIENT.addColorStop(0.5, 'white');
  GRADIENT.addColorStop(1, '#333');
  ctx.strokeStyle = GRADIENT;
  ctx.lineWidth = RADIUS*0.1;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, RADIUS * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawLetter() {
  const OLD_STYLE = ctx.fillStyle;
  ctx.fillStyle = 'red';
  ctx.fillText('H', 0, 0);
  ctx.fillStyle = OLD_STYLE;
}

function drawNumbers(ctx, RADIUS) {
  ctx.font = RADIUS * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
 
  drawLetter();
  for(let hour = 1; hour < 13; hour++){
    let angle = hour * Math.PI / 6;
    const RADIUS_NUMBERS = RADIUS * 0.85;   // 85% of RADIUS

    ctx.rotate(angle);                      // Rotate clockwise
    ctx.translate(0, -RADIUS_NUMBERS);      // Move the origin along y-axis
    ctx.rotate(-angle);                     // Undo the rotation, to print the number 'vertical' position

    ctx.fillText(hour.toString(), 0, 0);    // Print the number

    ctx.rotate(angle);                      // Red-do the rotation
    ctx.translate(0, RADIUS_NUMBERS);       // Restore origin to the clock center
    ctx.rotate(-angle);
		debugger;
  }

}

function drawClock() {
  drawFace(ctx, RADIUS);
	drawNumbers(ctx, RADIUS);
}

drawClock();
