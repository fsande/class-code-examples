/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 23, 2023
 * @description OO Multiple Present application
 *              Communication between classes is implemented using a callback
 */

/** 
 * @class
 * @description Represents a Present.
 *              Initially the present has an image that will be replaced
 *              by the present image when the original is clicked
 */
export class Present {
  /*
   * @constructor
   * @param {object} containerElement - DOM element that holds the present image
   * @param {string} presentSrc - URL of the image to show when the present is opened
   * @param {function} onOpenCallback - Callback to be invoked when the present is opened
   */
  constructor(private containerElement: HTMLElement, private presentSrc: string, private onOpenCallback: () => void, private image?: HTMLImageElement) {
    this.containerElement = containerElement;
    this.presentSrc = presentSrc;
    this.onOpenCallback = onOpenCallback;

    // Create image and append to container.
    this.image = document.createElement('img');
    this.image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
    this.image.addEventListener('click', this.openPresent);
    this.containerElement.append(this.image);
  }

  /** 
   * @method openPresent 
   * @description Event handler for click events
   * @param {object} event - Event object
   */
  private openPresent = (event: Event): void => {
    this.image!.src = this.presentSrc;
    this.image!.removeEventListener('click', this.openPresent);
    this.onOpenCallback();
  }
}
