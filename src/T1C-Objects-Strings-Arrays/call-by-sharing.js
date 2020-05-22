/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 20.ene.2020
	* @desc Call by Sharing
	*
  * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#As_a_DOM_event_handler}
  */

let p = {'x':5, 'y':3}; 
let changePoint = function(point, distance) {
  point.x = 0;
  console.log('in function:', point);
};
changePoint(p);
console.log('outside', p);

