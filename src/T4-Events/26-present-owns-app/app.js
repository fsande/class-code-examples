/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 14.may.2020
	* @desc OO Present. Present owns App
*/

"use strict";

/** 
  * @desc Class to represent a set of presents
	*       The class holds Present objects in an array
  */
class App {
  #presentContainer; /** DOM element to host the presents */
  #titleContainer;   /** DOM element corresponding to the <h2> text */ 
  #presents = [];    /** Array of presents */
  #openedCount = 0;  /** Holds the number of presents that have been opened */

  /**
   * @desc Fills the presents array
   * @param {object} presentContainer- The DOM element that hosts the presents
   * @param {object} titleContainer - The DOM element that holds the header text
   */
  constructor(presentContainer, titleContainer) {
    this.#presentContainer = presentContainer;
    this.#titleContainer = titleContainer;
    this.#fillPresentContainer();
  } 
  
  /**
	 * @method
   * @desc Creates the Present objects and stores them in the #presents array 
   */
  #fillPresentContainer() {
    for (const source of PRESENT_SOURCES) {
      const present = new Present(this.#presentContainer, source, this);
      this.#presents.push(present);
    }
  }
  
  /**
	 * @method
   * @desc If the present opened is the last one, modifies the text
   */
	onPresentOpened() {
    this.openedCount++;
    if (this.openedCount === this.#presents.length) {
      this.#titleContainer.textContent = 'Enjoy your presents!';
    }
  } 
}
