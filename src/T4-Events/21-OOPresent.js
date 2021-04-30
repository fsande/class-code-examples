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

/** 
  * @class
  * @desc Represents a present 
  *       Each present has an original image. When it is clicked, it is replaced
  *       with a (new) present image.
  */
class Present {
  /**
   * @constructor
   * @desc Sets up a present object creating a new image and placing it in the page (DOM)
   *       It set up an event listener for the click event on the button
   * @param {object} containerElement - The DOM element that will host the present
   */
  constructor(containerElement) {
    this.containerElement = containerElement;
    const image = document.createElement('img');
    image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
    this.containerElement.appendChild(image);
  }
}
