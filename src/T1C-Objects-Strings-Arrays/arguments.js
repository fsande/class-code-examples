/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 20.ene.2020
	* @desc Arguments
	*
	* When a function is called, it gets an arguments in its context, 
	* along with its defined parameters (and this, but we'll talk about that later)
  */

let f = function() {
  // btw... ok - I get the funny coercion rules now
  console.log("number of args " + arguments.length);
  console.log("typeof(arguments): " + typeof(arguments));
  for (let i = 0, j = arguments.length; i < j; i++) {
    console.log(arguments[i]);
  }
};
f(1, 2, 3);

