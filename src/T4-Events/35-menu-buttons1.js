/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 14.may.2020
  * @desc Events. Buttons Menu example
  * Using 2 classes:
  * Menu: 
  *   Has an array of Buttons
  * Button:
  *   console.log when clicked
*/

'use strict';

/** @desc Class to hold the (array of) buttons of the page */
class Menu {
  /** @private */
  #buttonContainer; /** The The DOM element that will host the button */
  #buttons;         /** Array of button objects */
  /** @desc Holds an array of Buttons which are created when the Menu is created */
  constructor() {
    this.#buttonContainer = document.querySelector('#menu');
    this.#buttons = [
      new Button(this.#buttonContainer, 'A'),
      new Button(this.#buttonContainer, 'B'),
      new Button(this.#buttonContainer, 'C')
    ];
  }
}

/** @desc Class for the objects buttons to be placed in tha page */
class Button {
  /** @private */
  #containerElement;  /** The The DOM element that will host the button */
  #text = '';  /** The button text */
  /**
   * @desc Sets up a button object placing it in the page (DOM)
   *       It set up an event listener for the click event on the button
   *       Notifies Menu when clicked, so that Menu can update the <h1>
   * @param {object} containerElement - The DOM element that will host the button
   * @param {String} text - Button text
   */
  constructor(containerElement, text) {
    this.#containerElement = containerElement;
    this.#text = text;
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', this.#onClick);
    this.#containerElement.append(button);
  }

  #onClick = () => {
    console.log('clicked: ' + this.#text);
  }
}

const menu = new Menu();   // When the page loads we create the Menu
