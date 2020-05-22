/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 20.ene.2020
	* @desc splice example
	*
  */

let a = [2, 4, 6, 8, 10, 12];
console.log(a.splice(2));
console.log(a);

a = [2, 4, 6, 8, 10, 12];
console.log(a.splice(2, 2));
console.log(a);

a = [2, 4, 6, 8, 10, 12];
console.log(a.splice(-2));
console.log(a);

a = [2, 4, 6, 8, 10, 12];
console.log(a.splice(2, 2, 1, 1));
console.log(a);
