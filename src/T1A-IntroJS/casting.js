/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 04.feb.2020
	* @desc Casting
	*       To cast, use constructors without new if you want the primitive:
	*
  */

// do this
let a = Boolean(false);

// not this
let b = new Boolean(false);

// because
console.log(typeof a); // --> boolean
console.log(typeof b); // --> object

// you'll have a SAD FACE after you try this...
Boolean(new Boolean(false))
