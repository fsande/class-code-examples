/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 16.ene.2020
	* @desc Closure Example
	*
  */

"use strict";

function misteryFunction(param) {
  let local = param;
  return () => local;
}

let myFunc= misteryFunction();
console.log(myFunc());			

