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

/** @desc Class to represent a single present */
class Present {
  /** @private */
  #containerElement;  /** DOM element that holds the presents */
  #presentSrc;        /** URL of the present image */
  #image;             /** New DOM element to hold the present image */

  /**
   * @constructor
   * @desc Fills the presents array
   * @param {object} presentContainer- The DOM element that hosts the presents
   * @param {string} presentSrc - URL of the new image for this present
   */
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
