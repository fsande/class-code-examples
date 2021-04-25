/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 14.may.2020
	* @desc Events. OO On click to console
*/

'use strict';


/**
 * @class
 * @description Class for the objects buttons to be placed in tha page
 */
class Button {
  /**
   * @description Sets up a button object placing it in the page (DOM)
	 *              It set up an event listener for the click event on the button
   * @param {Element} containerElement - The DOM element that will host the button
   * @param {String} text - Button text
   */
  constructor(containerElement, text) {
    this.containerElement = containerElement;
    this.text = text;

    this.onClick = this.onClick.bind(this);   // Use the current value of this in onClick


    let button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', this.onClick);
    this.containerElement.append(button);
  }


  /**
	 * @method
   * @description Event handler method for click events on the button
   */
  onClick() {
    console.log('clicked: ' + this.text);
  }
}

const buttonContainer = document.querySelector('#menu');
const button1 = new Button(buttonContainer, 'A');
const button2 = new Button(buttonContainer, 'B');
const button3 = new Button(buttonContainer, 'C');
