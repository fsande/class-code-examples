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

'use strict';

const myFun = function() {
  // btw... ok - I get the funny coercion rules now
  console.log("typeof(arguments): " + typeof(arguments));
  console.log("number of args " + arguments.length);
  for (const argument of arguments) {
    console.log(argument);
  }
};

myFun(1, 'alfa', 3);
