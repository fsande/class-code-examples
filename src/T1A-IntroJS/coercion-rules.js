/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 04.feb.2020
	* @desc Coercion Rules
	*
  */

console.log("5" + 5);
console.log(false + 5);
console.log(undefined + 5);
console.log("10" > 5);
console.log(NaN > 5);
console.log(undefined > 5);

console.log('===============================');
console.log('foo' + (1 + 2));
console.log(('foo' + 1) + 2);

console.log('===============================');
console.log("10" == 10);
console.log(0 == false);
console.log("" == false);

console.log('===============================');
console.log(+-12);
console.log(-+12);
console.log(+"hello");
