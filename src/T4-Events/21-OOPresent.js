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
    const image = document.createElement('img');
    image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
    this.containerElement.appendChild(image);
  }
}
