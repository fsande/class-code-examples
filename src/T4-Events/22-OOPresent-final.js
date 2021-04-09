/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 14.may.2020
	* @desc JS Events. OO Present Class
*/

'use strict';

class Present {
  constructor(containerElement) {
    this.containerElement = containerElement;

    // Create image and append to container.
    const image = document.createElement('img');
    image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
		image.addEventListener('click', this._openPresent);
    this.containerElement.append(image);
  }


  /**
	 * @method
   * @description Changes the DOM with the new image and removes the listener
   */
  _openPresent(event) {
  	const image = event.currentTarget;
    image.src = 'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif'; // The new image
  	image.removeEventListener('click', this._openPresent);
  }
}
