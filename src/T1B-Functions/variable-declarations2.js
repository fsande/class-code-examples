/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 28.Feb.2021
  * @desc Variable declarations. Scope
  *
  */

'use strict';

let x = 1;

function f() {
  let x = 2;
  function g() {
    x = 3;
    console.log(x);
  }
  g();
  console.log(x);
}

f();
console.log(x);
