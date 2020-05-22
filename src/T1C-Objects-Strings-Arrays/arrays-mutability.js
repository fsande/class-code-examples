/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 20.ene.2020
	* @desc Arrays mutability
	*
  * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#As_a_DOM_event_handler}
  */

let a = [1, 2, 3];
let b = a;
a.push(4);
console.log(b);

