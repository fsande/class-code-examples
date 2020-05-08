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


function drawNumbers(ctx, RADIUS) {
  ctx.font = RADIUS * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for(let hour = 1; hour < 13; hour++){
    let angle = hour * Math.PI / 6;
		const RATIO = 0.85;         // 85%
    ctx.rotate(angle);
    ctx.translate(0, -RADIUS * RATIO);
    ctx.rotate(-angle);
    ctx.fillText(hour.toString(), 0, 0);
    ctx.rotate(angle);
    ctx.translate(0, RADIUS * RATIO);
    ctx.rotate(-angle);
  }
}

function drawHand(ctx, angle, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(angle);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-angle);
}

function drawTime(ctx, RADIUS) {
  const NOW = new Date();
  const HOUR = NOW.getHours() % 12;
  const MINUTE = NOW.getMinutes();
  const SECOND = NOW.getSeconds();

	const HOUR_ANGLE =	(HOUR * Math.PI / 6) + (MINUTE * Math.PI / (6 * 60)) + (SECOND * Math.PI / (360 * 60));
	const MINUTE_ANGLE = (MINUTE * Math.PI / 30) + (SECOND * Math.PI / (30 * 60));
  const SECOND_ANGLE = (SECOND * Math.PI / 30);

  drawHand(ctx, HOUR_ANGLE,   RADIUS * 0.5, RADIUS * 0.07);
  drawHand(ctx, MINUTE_ANGLE, RADIUS * 0.8, RADIUS * 0.07);
  drawHand(ctx, SECOND_ANGLE, RADIUS * 0.9, RADIUS * 0.02);
}

function drawClock() {
  drawFace(ctx, RADIUS);
	drawNumbers(ctx, RADIUS);
  drawTime(ctx, RADIUS);
}

drawClock();
