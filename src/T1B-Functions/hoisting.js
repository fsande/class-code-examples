/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Mar 10 2022
  * @desc This works because function declarations are "hoisted" (MDN)
  * @see https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
  */
  
'use strict';  

hello();
hello();

function hello() {
  console.log('Hello!');
  console.log('Welcome to PAI');
}
