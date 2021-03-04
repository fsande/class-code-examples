/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 30.ene.2020
	* @desc Maps through objects
	*
  */

let scores = {
  peach: 100,
  mario: 88,
  luigi: 91
};
scores.toad = 72;
let name = 'wario';
scores[name] = 102;
console.log(scores);   // → 100
