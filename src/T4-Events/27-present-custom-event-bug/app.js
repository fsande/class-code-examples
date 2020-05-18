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

class App {
  constructor(presentContainer, titleContainer) {
    this.presentContainer = presentContainer;
    this.titleContainer = titleContainer;
    this.presents = [];
    this._fillPresentContainer();
    this.openedCount = 0;
    document.addEventListener('present-opened', this._onPresentOpened);
  }

  /** @method _fillPresentContainer */
  _fillPresentContainer() {
    for (const source of PRESENT_SOURCES) {
      const present = new Present(this.presentContainer, source);
      this.presents.push(present);
    }
  }

  /** @method _onPresentOpened */
  _onPresentOpened() {
    this.openedCount++;
    if (this.openedCount === this.presents.length) {
      this.titleContainer.textContent = 'Enjoy your presents!';
    }
  }
}
