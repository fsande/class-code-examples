/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 16, 2023
 * @description Tic Tac Toe Example. Final solution
 */

const HUMAN = 'x';
const COMPUTER = 'o';

/** 
  * @desc Assigns an empty space (box) to its new owner (HUMAN or COMPUTER)
  *       Registers the assignation on the takenBoxes global array
  *       Deletes the box from the freeBoxes global array
  * @param {object} space. The HTML Element that represents the Box (it is a div)
  * @param {string} owner It can be HUMAN or COMPUTER 
  */
const assignSpace = function(space, owner) {
  const X_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';
  const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';
  const image = document.createElement('img');
  image.src = owner === HUMAN ? X_IMAGE_URL : O_IMAGE_URL;
  space.appendChild(image);

  const index = parseInt(space.dataset.index);
  takenBoxes[index] = owner;
  const indexToRemove = freeBoxes.indexOf(space);
  freeBoxes.splice(indexToRemove, 1);
  space.removeEventListener('click', changeToX);
}

const changeToX = function(event) {
  assignSpace(event.currentTarget, HUMAN);
  if (isGameOver()) {
    displayWinner();
  } else {
    computerChooseO();
  }
}

const computerChooseO = function() {
  const index = Math.floor(Math.random() * freeBoxes.length);
  const freeSpace = freeBoxes[index];
  assignSpace(freeSpace, COMPUTER);
  if (isGameOver()) {
    displayWinner();
  }
}

const isGameOver = function() {
  return freeBoxes.length === 0 || getWinner() !== null;
}

const displayWinner = function() {
  const WINNER = getWinner();
  const resultContainer = document.querySelector('#results');
  const header = document.createElement('h1');
  if (WINNER === HUMAN) {
    header.textContent = 'You win!';
  } else if (WINNER === COMPUTER) {
    header.textContent = 'Computer wins';
  } else {
    header.textContent = 'Tie';
  }
  resultContainer.appendChild(header);

  // Remove remaining event listeners
  for (let box of freeBoxes) {
    box.removeEventListener('click', changeToX);
  }
}

// Returns HUMAN, COMPUTER, or null for no winner yet.
const checkBoxes = function(one, two, three) {
  if (takenBoxes[one] !== undefined &&
      takenBoxes[one] === takenBoxes[two] &&
      takenBoxes[two] === takenBoxes[three]) {
    return takenBoxes[one];
  }
  return null;
}

// Returns HUMAN, COMPUTER, or null for no winner yet.
const getWinner = function() {
  for (let col = 0; col < 3; col++) {
    const OFFSET = col * 3;
    // Check rows and columns.
    let result = checkBoxes(OFFSET, 1 + OFFSET, 2 + OFFSET) ||
        checkBoxes(col, 3 + col, 6 + col);
    if (result) {
      return result;
    }
  }
  // Check diagonals
  return checkBoxes(0, 4, 8) || checkBoxes(2, 4, 6);
}

const freeBoxes = [];
// Map of box number -> HUMAN or COMPUTER
const takenBoxes = {};


const main = function() {
  const boxes: NodeList = document.querySelectorAll('#grid div')! as NodeList;
  for (const box of boxes) {
    box.addEventListener('click', changeToX);
    freeBoxes.push(box);
  }
}

main();
