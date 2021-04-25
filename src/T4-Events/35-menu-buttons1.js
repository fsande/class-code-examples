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
  * Has an array of Buttons
  * Also updates the <h1> with what was clicked
  * Button:
  * Notifies Menu when clicked, so that Menu can update the <h1>
*/

'use strict';


/**
 * @description Class to hold the (array of) buttons of the page
 */
class Menu {
  /**
   * @description Holds an array of Buttons
	 *              The buttons are created when the Menu is created
   */
  constructor() {
    this.buttonContainer = document.querySelector('#menu');
    this.buttons = [
      new Button(this.buttonContainer, 'A'),
      new Button(this.buttonContainer, 'B'),
      new Button(this.buttonContainer, 'C')
    ];
  }
}


/**
 * @description Class for the objects buttons to be placed in tha page
 */
class Button {
  /**
   * @description Sets up a button object placing it in the page (DOM)
	 *              It set up an event listener for the click event on the button
	 *              Notifies Menu when clicked, so that Menu can update the <h1>
   * @param {Element} containerElement - The DOM element that will host the button
   * @param {String} text - Button text
   */
  constructor(containerElement, text) {
    this.containerElement = containerElement;
    this.text = text;

    this.onClick = this.onClick.bind(this);

    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', this.onClick);
    this.containerElement.append(button);
  }

  onClick() {
    console.log('clicked: ' + this.text);
  }
}

const menu = new Menu();   // When the page loads we create the Menu
