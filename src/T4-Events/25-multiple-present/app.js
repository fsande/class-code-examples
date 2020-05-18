/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 14.may.2020
	* @desc Events. OO Present. Multiple Presents. App Class
*/

"use strict";

class App {
  constructor(presentContainer, titleContainer) {
    this.presentContainer = presentContainer;
    this.titleContainer = titleContainer;

    this.presents = [];
    this._fillPresentContainer();
  }

  _fillPresentContainer() {
    for (const source of PRESENT_SOURCES) {
      const present = new Present(this.presentContainer, source);
      this.presents.push(present);
    }
  }
}
