/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 23, 2023
 * @description Events. OO Present Class
 */

/** 
 * @class
 * @description Represents a present 
 *              Each present has an original image. When it is clicked, it is replaced
 *              with a (new) present image.
 */
class Present {
  /**
   * @constructor
   * @description Sets up a present object (new image) placing it in the page (DOM)
   *              Creates image and append to container
   * @param containerElement - The DOM element that will host the present (image)
   */
  constructor(private containerElement: HTMLElement) {
    let image: HTMLImageElement = document.createElement('img');
    image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
    image.addEventListener('click', this.openPresent);
    this.containerElement.append(image);
  }

  /**
   * @method
   * @description Listener. Changes the DOM with the new image and removes the listener
   * @param event - Event object 
   */
  private openPresent(event: Event): void {
    let image: HTMLImageElement = event.currentTarget as HTMLImageElement;
    image.src = 'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif'; // The new image
    image.removeEventListener('click', this.openPresent);
  }
}

function main(): void {
  const containerElement: HTMLElement = document.querySelector('#presents');
  const present = new Present(containerElement);
}

main();
