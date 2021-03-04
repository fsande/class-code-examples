/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 4.Mar.2021
	* @desc Computed Properties
  *       We can use square brackets in an object literal, when creating an object. 
  *       That’s called computed properties.
  *
  * @see {@link https://javascript.info/arrow-functions-basics}
  */

"use strict";

const readlineSync = require('/home/fsande/.node_modules_global/lib/node_modules/readline-sync/');

let fruit = readlineSync.question('Which fruit to buy? ');

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

console.log(bag.apple); 
