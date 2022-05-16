/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 14.may.2020
  * @desc OO App class
*/

"use strict";


/** 
 * @class
 * @desc App Class. Holds and manages multiple presents (objects) 
 */
class App {
  /** @private */
  #presentContainer; /** DOM element to host the presents */
  #titleContainer;   /** DOM element corresponding to the <h2> text */ 
  #presents = [];    /** Array of presents */
  #openedCount = 0;  /** Holds the number of presents that have been opened */

  /*
   * @constructor
   * @param {object} presentContainer - DOM element that holds the array of presents
   * @param {object} titleContainer - DOM element that holds the header title of the page
   */
  constructor(presentContainer, titleContainer) {
    this.#presentContainer = presentContainer;
    this.#titleContainer = titleContainer;
    this.#fillPresentContainer();
  }

  /**
   * @method #fillPresentContainer
   * @desc Creates the present objects and stores them in the #presents array
   */
  #fillPresentContainer() {
    for (const SOURCE of PRESENT_SOURCES) {
      const PRESENT = new Present(this.#presentContainer, SOURCE, this.#onPresentOpened);
      this.#presents.push(PRESENT);
    }
  }

  /**
   * @method #onPresentOpened
   * @desc When a present is opened, the method updates the number of opened presents
   *       If it is the last present it modifies the page header message
   */
  #onPresentOpened = () => {
    this.#openedCount++;
    if (this.#openedCount === this.#presents.length) {
      this.#titleContainer.textContent = 'Enjoy your 5 presents!';
    }
  }
}
