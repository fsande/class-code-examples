/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 14.may.2020
	* @desc OO Present with custom Events. App class
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
    document.addEventListener('present-opened', this.onPresentOpened);
  }

  /** @method fillPresentContainer */
  #fillPresentContainer() {
    for (const source of PRESENT_SOURCES) {
      const present = new Present(this.#presentContainer, source);
      this.#presents.push(present);
    }
  }

  /** @method onPresentOpened */
  onPresentOpened() {
    this.#openedCount++;
    if (this.#openedCount === this.#presents.length) {
      this.#titleContainer.textContent = 'Enjoy your presents!';
    }
  }
}
