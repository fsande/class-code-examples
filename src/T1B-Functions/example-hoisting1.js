/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 16.ene.2020
	* @desc Hoisting Example
	*
  */

"use strict";

function outer() {
  inner();
  function inner() {
    console.log('hello');	
  }
}
outer();
