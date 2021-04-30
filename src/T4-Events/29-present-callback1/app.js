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
  }

  /** @method #fillPresentContainer */
  #fillPresentContainer() {
    for (const SOURCE of PRESENT_SOURCES) {
      const PRESENT = new Present(this.#presentContainer, SOURCE, this.onPresentOpened);
      this.#presents.push(PRESENT);
    }
  }

  /** @method onPresentOpened */
  onPresentOpened() {
    this.openedCount++;
    if (this.openedCount === this.#presents.length) {
      this.#titleContainer.textContent = 'Enjoy your presents!';
    }
  }
}
