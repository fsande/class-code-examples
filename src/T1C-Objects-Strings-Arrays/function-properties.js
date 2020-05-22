/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 22.may.2020
	* @desc Function properties
	* 
	* When you declare a function, you create an object of type Function, which has properties like:
  *   name
  *   toString
	*
	* Function objects also have a call method, which invokes the underlying executable code associated with this function object
  */

const greeting = function() {
  console.log('hello, world');
};

console.log('Name: ', greeting.name);
console.log('toString: ', greeting.toString());

greeting.call();

// This is the same as greeting.call();
greeting();
