/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 24.apr.2020
 * @desc Tic Tac Toe Example. Step 2. Better(?) approach: Global Variable
 */

"use strict";

const X_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';
const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';

function changeToX(event) {
  const container = event.currentTarget;
  const image = document.createElement('img');
  image.src = X_IMAGE_URL;
  container.appendChild(image);
  container.removeEventListener('click', changeToX);
  
  // Update freeBoxes removing the container 
  const indexToRemove = freeBoxes.indexOf(container);
  freeBoxes.splice(indexToRemove, 1);
  computerChooseO();
}

function computerChooseO() {
  const allBoxes  = document.querySelectorAll('#grid div');
  const index = Math.floor(Math.random() * freeBoxes.length);
  const freeSpace = freeBoxes[index];
  // Remove the chosen box from freeBoxes.
  freeBoxes.splice(index, 1);
  const image = document.createElement('img');
  image.src = O_IMAGE_URL;
  freeSpace.removeEventListener('click', changeToX);
  freeSpace.appendChild(image);
}

const freeBoxes = [];
const boxes = document.querySelectorAll('#grid div');
for (const box of boxes) {
  box.addEventListener('click', changeToX);
  freeBoxes.push(box);
}

