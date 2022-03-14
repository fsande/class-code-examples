/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Mar 14 2022
  * @desc Hoisting with function expressions
  *
  */
  
'use strict';  

function main() {
  let localVar = myFunction();
  console.log('Local var: ', localVar);
}

const myFunction= function() {
  console.log('Welcome to PAI');
  return 17;
}

main();
