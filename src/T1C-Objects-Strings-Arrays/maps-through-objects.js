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

const SCORES = {
  peach: 100,
  mario: 88,
  luigi: 91
};
SCORES.toad = 72;
let name = 'wario';
SCORES[name] = 102;
console.log(SCORES);   // → 100
