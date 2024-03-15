/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 24.Apr.2020
 * @desc Tic Tac Toe Example. Initial Code
 */

'use strict';

const onClick = function(event) {
  const X_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';
  const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';
  const element = event.target;   // Get the element that was clicked

  // Create an <img> tag with the X img src
  const image = document.createElement('img');
  image.src = X_IMAGE_URL;

  // Append that <img> tag to the element
  element.appendChild(image);
}

const main = function() {
  // All elements that have grid and div (all divs)
  const gridItems = document.querySelectorAll('#grid div');

  // Add a listener to all thouse elements 
  for (const item of gridItems) {
    item.addEventListener('click', onClick);
  }
}

main();
