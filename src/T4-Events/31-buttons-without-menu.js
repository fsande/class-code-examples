/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 14.may.2020
	* @desc Events. OO Buttons without menu
*/

'use strict';

/**
 * @class
 * @description Class for the objects buttons to be placed in tha page
 */
class Button {
  #containerElement;  /** HTML container for the button */

  /**
   * @description Sets up a button object placing it in the page (DOM)
   * @param {Element} containerElement - The DOM element that will host the button
   * @param {String} text - Button text
   */
  constructor(containerElement, text) {
    this.#containerElement = containerElement;

    let button = document.createElement('button');
    button.textContent = text;
    this.#containerElement.append(button);
  }
}

const buttonContainer = document.querySelector('#menu');
const button1 = new Button(buttonContainer, 'A');
const button2 = new Button(buttonContainer, 'B');
const button3 = new Button(buttonContainer, 'C');
