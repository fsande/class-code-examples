/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 16.ene.2020
  * @desc Default arguments
  *
  * We can use the = operator to give a default value for the parameter it it is missing:
  */

"use strict";

function greetTheWorld(greeting) {
  console.log((greeting || "Hello") + " world!");
}
 
 
function greetTheWorld1(greeting = "Hello") {
  console.log(greeting + " world!");
}

greetTheWorld("Hi");
greetTheWorld();


greetTheWorld1("Hi");
greetTheWorld1();

