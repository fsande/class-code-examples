"use strict";
/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 11, 2023
  * @desc Constructor
  *       The strictPropertyInitialization setting controls whether class fields need to be initialized in the constructor.
  *       The code produces this error:
  *         Property 'name' has no initializer and is not definitely assigned in the constructor.
  * @see https://www.typescriptlang.org/docs/handbook/2/classes.html#--strictpropertyinitialization
  */
class BadGreeter {
    name;
}
class GoodGreeter {
    name;
    constructor() {
        this.name = 'Alan Turing';
    }
}
