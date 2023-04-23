/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 23, 2023
 * @description OO Present. Present owns App
*/

import {Present} from './present.js';
import {PRESENT_SOURCES} from './present-sources.js';

/** 
 * @description Class to represent a set of presents
 *              The class holds Present objects in an array
 */
export class App {
  private presentContainer: HTMLElement; /** DOM element to host the presents */
  private titleContainer: HTMLElement;   /** DOM element corresponding to the <h2> text */ 
  private presents: Present[] = [];     /** Array of presents */
  private openedCount: number = 0;       /** Holds the number of presents that have been opened */

  /**
   * @description Fills the presents array
   * @param presentContainer- The DOM element that hosts the presents
   * @param titleContainer - The DOM element that holds the header text
   */
  constructor(presentContainer: HTMLElement, titleContainer: HTMLElement) {
    this.presentContainer = presentContainer;
    this.titleContainer = titleContainer;
    this.fillPresentContainer();
  } 
  
  /**
   * @method
   * @description Creates the Present objects and stores them in the presents array 
   */
  private fillPresentContainer(): void {
    for (const SOURCE of PRESENT_SOURCES) {
      const PRESENT = new Present(this.presentContainer, SOURCE, this);
      this.presents.push(PRESENT);
    }
  }
  
  /**
   * @method
   * @description If the present opened is the last one, modifies the text
   */
  public onPresentOpened(): void {
    this.openedCount++;
    if (this.openedCount === this.presents.length) {
      this.titleContainer.textContent = 'Enjoy your presents!';
    }
  } 
}
