/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 22.may.2020
	* @desc Object with a Function property
	*
	* Only Function objects have executable code associated with them. 
  * Regular JS objects cannot be invoked
  * Regular JS objects cannot be given executable code
  * I.e. you can't make a regular JS object into a callable function
  *
	* But you can give your object Function properties and then invoke those properties.
  *
  */

"use strict";

function sayHello() {
  console.log('Ice Bear says hello');
}

let bird = {
  name: 'mockingbird',
  hobbies: ['flying', 'cooking', 'singing'],
};

let bear = {
  name: 'Ice Bear',
  hobbies: ['knitting', 'cooking', 'dancing'],
  greeting: sayHello
};

bird();    // Error: you can't invoke a regular object
bear.greeting(); 	// You can invoke the function property of the bear object
