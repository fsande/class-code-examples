/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 31.jan.2020
 * @desc Canvas Example
 *
 * https://medium.com/javascript-in-plain-english/introduction-to-html5-canvas-for-generative-art-f8093e3c5ba2
 */

"use strict";

function draw() {
  // get canvas by id
    // get canvas by id
  const canvas = document.querySelector("#myCanvas")
  
  // overriding default width & height
  canvas.width = 500
  canvas.height = 500
  
  // get 2d context of our canvas
  const ctx = canvas.getContext("2d")
  
  // optional step to fill color of rectangle to be created as default color is black
  ctx.fillStyle = "tomato"
  
  // draw rectangle, and fill it with "tomato" color
  // x = 10
  // y = 20
  // width = 200
  // height = 300
  ctx.fillRect(10, 20, 200, 300)
  
  // now change style to stroke instead of fill, and make sure it is green in color
  ctx.strokeStyle = "green"
  
  // draw rectangle with "green" color stroke (no fill)
  // x = 100
  // y = 100
  // width = 200
  // height = 100
  ctx.strokeRect(150, 100, 200, 100)
  
  // Step 1. Invoke path method
  ctx.beginPath()
  // Step 2. Creating a circular path
  // x = 300
  // y = 320
  // start angle =  0
  // end angle = 360 or 2*PI
  ctx.arc(300, 320, 75, 0, 2*Math.PI)
  
  // Fill with Lavender color
  ctx.fillStyle = "Lavender"
  //Step 3. Now ink on canvas 
  ctx.fill()
  
  ctx.beginPath();
  // Point A
  ctx.moveTo(350, 50);
  // Point B
  ctx.lineTo(400, 100);
  ctx.strokeStyle = "DeepPink"
  ctx.stroke();
  
  ctx.beginPath();
  // Point A
  ctx.moveTo(250, 250);
  // Point B
  ctx.lineTo(500, 400);
  // Point C
  ctx.lineTo(100, 25);
  // Join C & A
  ctx.closePath()

  ctx.strokeStyle = "Navy"
  ctx.stroke();
}

draw();
