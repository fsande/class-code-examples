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
  coordX: number;
  coordY: number;

  // Normal signature with defaults
  constructor(coordX = 0, coordY = 0) {
    this.coordX = coordX;
    this.coordY = coordY;
  }
}

class Point2 {
  coordX: number = 0;
  coordY: number = 0;

  // Overloads
  constructor(coordX: number, coordY: string);
  constructor(coord: string);
  constructor(coordX: any, coordY?: any) {
    // TBD
  }
}
