/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 14.may.2020
	* @desc Events. OO Present. Multiple Presents. Present class
*/

"use strict";

/** 
  * @desc Class to represent a present 
	*       Displays 5 images that will be replaced by a different one when clicked.
  */
class Present {
  #containerElement;  /** DOM element that holds the presents */
  #presentSrc;        /** URL of the present image */
  #image;             /** New DOM element to hold the present image */

  constructor(containerElement, presentSrc) {
    this.#containerElement = containerElement;
    this.#presentSrc = presentSrc;

    // Bind event listeners.
    this.openPresent = this.openPresent.bind(this);

    // Create image and append to container.
    this.#image = document.createElement('img');
	  const INITIAL_IMAGE = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
    this.#image.src = INITIAL_IMAGE;	
		this.#image.addEventListener('click', this.openPresent);
    this.#containerElement.append(this.#image);
  }

  /**
	 * @method
   * @desc Listener for the click event on images (presents)
	 *       Replaces the initial image with the present (new) image
	 *       Removes the click event listener
   */
  openPresent(event) {
    this.#image.src = this.#presentSrc;
  	this.#image.removeEventListener('click', this.openPresent);
  }
}
