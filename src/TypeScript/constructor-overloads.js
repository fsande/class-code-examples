"use strict";
/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 11, 2023
  * @desc Constructors can be overloaded
  * @see https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors
  */
class Point1 {
    coordX;
    coordY;
    // Normal signature with defaults
    constructor(coordX = 0, coordY = 0) {
        this.coordX = coordX;
        this.coordY = coordY;
    }
}
class Point2 {
    coordX = 0;
    coordY = 0;
    constructor(coordX, coordY) {
        // TBD
    }
}
