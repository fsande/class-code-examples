/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 22.May.2020
	* @desc Function as a parameter
	*
	* Note: This is a silly and contrived example. You wouldn't/shoudln't write
  * JS code that looks like this.
  *
  */

"use strict";

function greetings(greeterFunction) {
  greeterFunction();
}

const worldGreeting = function() {
  console.log('hello world');
};

const hawaiianGreeting = () => {
  console.log('aloha');
};

greetings(worldGreeting);
greetings(hawaiianGreeting);
