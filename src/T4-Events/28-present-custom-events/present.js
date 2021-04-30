/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 14.may.2020
	* @desc OO Present custom Events with bug. Present class
*/

"use strict";

class Present {
  #containerElement;
  #presentSrc;
  #image;

  constructor(containerElement, presentSrc) {
    this.#containerElement = containerElement;
    this.#presentSrc = presentSrc;

    // Bind event listeners.
    this.openPresent = this.openPresent.bind(this);

    // Create image and append to container.
    this.#image = document.createElement('img');
    this.#image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
		this.#image.addEventListener('click', this.openPresent);
    this.#containerElement.append(this.#image);
  }

  /** @method openPresent 
	    @desc Event handler for click events
            Dispatches the 'present-opened' event
      @param {object} event - Event object
	*/
  openPresent(event) {
    this.#image.src = this.#presentSrc;
  	this.#image.removeEventListener('click', this.openPresent);
    document.dispatchEvent(new CustomEvent('present-opened'));
  }
}
