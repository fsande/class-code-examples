/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 16.ene.2020
	* @desc do-while
	*
  * This program will force you to enter a name. 
  * It will ask again and again until it gets something that is not an empty string. 
  * Applying the ! operator will convert a value to Boolean type before negating it, 
  * and all strings except "" convert to true. 
  * This means the loop continues going round until you provide a non-empty name.
  */

const readlineSync = require('/home/fsande/.node_modules_global/lib/node_modules/readline-sync/');

let yourName;
do {
  yourName = readlineSync.question('Introduce tu nombre: ');
} while (!yourName);
console.log('Hola ' + yourName + '!');
