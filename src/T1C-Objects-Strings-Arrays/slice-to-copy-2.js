/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 20.ene.2020
	* @desc Use of slice to copy
	*
  */

let a = [{}, 2, 3];
let b = a.slice();
b[0].tricky = 'yup, same object';
console.log(a);   // → 
