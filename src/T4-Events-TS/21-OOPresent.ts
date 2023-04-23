/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 23, 2023
 * @description JS Events. OO Present Class
 */

/** 
 * @class
 * @description Represents a present.
 *              Each present has an original image. 
 *              When it is clicked, it will be replaced with a (new) present image.
 */
class Present {
  private containerElement: HTMLElement;

  /**
   * @constructor
   * @description Sets up a present object creating a new image and placing it in the page (DOM)
   *       It set up an event listener for the click event on the button
   * @param containerElement - The DOM element that will host the present
   */
  constructor(containerElement: HTMLElement) {
    this.containerElement = containerElement;
    const image: HTMLImageElement = document.createElement('img');
    image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
    this.containerElement.appendChild(image);
  }
}

function main(): void {
  const containerElement: HTMLElement = document.querySelector('#presents');
  const present = new Present(containerElement);
}

main();
