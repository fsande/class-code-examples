/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 16.ene.2020
	* @desc Scope and functions
	*
  */

let x = "hi!";         // hello... I'm a global variable

let f = function() {
	let x = "from f";
};

let g = function() {
	x = "from g";
};

console.log(x)
f();
console.log(x);
g();
console.log(x);

