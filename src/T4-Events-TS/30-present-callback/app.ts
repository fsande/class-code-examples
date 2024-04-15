/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 23, 2023
 * @description OO App class
*/

import {Present} from './present.js';
import {PRESENT_SOURCES} from './present-sources.js';

/** 
 * @class
 * @description App Class. Holds and manages multiple presents (objects) 
 */
export class App {
  private presentContainer: HTMLElement; /** DOM element to host the presents */
  private titleContainer: HTMLElement;   /** DOM element corresponding to the <h2> text */ 
  private presents: Present[] = [];    /** Array of presents */
  private openedCount: number = 0;  /** Holds the number of presents that have been opened */

  /*
   * @constructor
   * @param {object} presentContainer - DOM element that holds the array of presents
   * @param {object} titleContainer - DOM element that holds the header title of the page
   */
  constructor(presentContainer: HTMLElement, titleContainer: HTMLElement) {
    this.presentContainer = presentContainer;
    this.titleContainer = titleContainer;
    this.fillPresentContainer();
  }

  /**
   * @method fillPresentContainer
   * @description Creates the present objects and stores them in the presents array
   *              Each present receives (3rd parameter in the constructor) a reference
   *              to this.onPresentOpened
   *              This is a callback that will be executed by presents when opened
   *              It implements the communication from present to this container app
   */
  private fillPresentContainer(): void {
    for (const SOURCE of PRESENT_SOURCES) {
      const PRESENT = new Present(this.presentContainer, SOURCE, this.onPresentOpened);
      this.presents.push(PRESENT);
    }
  }

  /**
   * @method onPresentOpened
   * @description When a present is opened, the method updates the number of opened presents
   *              If it is the last present it modifies the page header message
   */
  private onPresentOpened = (): void => {
    this.openedCount++;
    if (this.openedCount === this.presents.length) {
      this.titleContainer.textContent = 'Enjoy your 5 presents!';
    }
  }
}
