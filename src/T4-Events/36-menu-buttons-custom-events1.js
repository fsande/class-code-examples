/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 14.may.2020
  * @desc Events. Menu and buttons with custom Events
  */

'use strict';

/** @desc Class to hold the (array of) buttons of the page */
class Menu {
  /** @private */
  #buttonContainer; /** The The DOM element that will host the button */
  #statusBar;       /** The The DOM element that will host the <h1> text with the button info */
  #buttons;         /** Array of Button objects */

  /** 
   * @constructor 
   * @desc Holds an array of Buttons which are created when the Menu is created 
   */
  constructor() {
    this.#buttonContainer = document.querySelector('#menu');
    this.#statusBar = document.querySelector('#status-bar');
    this.showButtonClicked = this.showButtonClicked.bind(this);
    this.#buttons = [
      new Button(this.#buttonContainer, 'A'),
      new Button(this.#buttonContainer, 'B'),
      new Button(this.#buttonContainer, 'C')
    ];

    document.addEventListener('button-click', this.showButtonClicked);
  }

  /**
   * @method
   * @description Console logs and prints the button changing the DOM
   */
  showButtonClicked(event) {
    console.log('Menu notified!');
    const BUTTON_NAME = event.currentTarget.textContent;
    this.#statusBar.textContent = BUTTON_NAME + ' was clicked';
  }
}

/**
 * @description Class for the buttons objects to be placed in tha page
 */
class Button {
  /** @private */
  #containerElement;  /** The The DOM element that will host the button */
  #text = '';  /** The button text */

  /**
   * @desc Sets up a button object placing it in the page (DOM)
   *       It set up an event listener for the click event on the button
   *       Notifies Menu when clicked, so that Menu can update the <h1>
   * @param {Element} containerElement - The DOM element that will host the button
   * @param {String} text - Button text
   */
  constructor(containerElement, text) {
    this.#containerElement = containerElement;
    this.#text = text;
    this.onClick = this.onClick.bind(this);
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', this.onClick);
    this.#containerElement.append(button);
  }

  /**
   * @method
   * @description Event handler method for click events on the button
   *              console logs and dispathes the even
   */
  onClick() {
    console.log('clicked: ' + this.#text);
    document.dispatchEvent(new CustomEvent('button-click'));
  }
}

const menu = new Menu();
