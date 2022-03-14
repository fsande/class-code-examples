/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Mar 14 2022
  * @desc Hoisting 
  *       Variables declared with let / const are not hoisted
  *       This code produces a ReferenceError: Cannot access 'myVar' before initialization.
  *       If the code would not be enclosed in a main() function, the result would be the same.
  *       Variables declared with let / const are not hoisted to their enclosing scope.
  */
  
'use strict';  

function main() {
  console.log('MyVar: ', myVar);
  console.log('MyConst: ', MY_CONST);

  let myVar = 7;
  const MY_CONST = 8;
}

main();
