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

class App {
  #presentContainer;
  #titleContainer;
  #presents = [];
  #openedCount = 0;

  constructor(presentContainer, titleContainer) {
    this.#presentContainer = presentContainer;
    this.#titleContainer = titleContainer;
    this.#fillPresentContainer();
    this.onPresentOpened = this.onPresentOpened.bind(this);
    document.addEventListener('present-opened', this.onPresentOpened);
  }

  /** @method 
    * @desc Creates the present objects and stores them in the #presents array
    */
  #fillPresentContainer() {
    for (const SOURCE of PRESENT_SOURCES) {
      const PRESENT = new Present(this.#presentContainer, SOURCE);
      this.#presents.push(PRESENT);
    }
  }

  /** @method onPresentOpened*/
  onPresentOpened() {
    this.#openedCount++;
    if (this.#openedCount === this.#presents.length) {
      this.#titleContainer.textContent = 'Enjoy your presents!';
    }
  }
}
