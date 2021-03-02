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
  * The global num is not used
  * Instead, num within the function is hoisted to the top of its enclosing scope, the function, f
  * Note the initialization is executed in the place where it occurs… consequently, num is undefined
  */

"use strict";

var num = 1000;
f();

function f(){
	console.log(num);
	var num = 5;
};
