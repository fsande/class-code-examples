/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 16.ene.2020
	* @desc 
	* @desc Hoisting Example
	*
  * Yup, still undefined. 
	* the declaration is hoisted ... but the initialization to a value is not
  */

// console.log(f);
// var f = function(x) {
//   console.log("hello " + x);
// }

// it's executed as if it were
var f;
console.log(f);
f = function(x) {
  console.log("hello " + x);
}
