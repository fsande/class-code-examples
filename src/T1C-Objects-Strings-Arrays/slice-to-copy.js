/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 20.ene.2020
  * @desc Use of slice to copy
  *       A common way of duplicating an Array is to use slice
  *
  */

'use strict';

let a = [1, 2, 3];
let b = a.slice();
a.push(4);
console.log(b);
