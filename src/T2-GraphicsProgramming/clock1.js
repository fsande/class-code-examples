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

function drawClock() {
  ctx.arc(0, 0, RADIUS, 0 , 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
}

drawClock();
