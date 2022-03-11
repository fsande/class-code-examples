/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Mar 11 2022
  * @desc Functions can be nested
  *       Each function can access the variables in the enclosing scopes
  */

const outer = function() {
  let outsideVar = 'outside';
  const inner = function() {
    outsideVar += ' modified by inside';
    let innerVar = 'inner';
  };
  console.log(outsideVar);
  inner();
  console.log(outsideVar);
  // console.log(innerVar);  // This statement produces a ReferenceError
};

outer();
