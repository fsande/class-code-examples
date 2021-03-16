/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 20.ene.2020
  * @desc Use of slice to copy
  *       In this code b = a.slice() copy array a into b but the first element of a is an object,
  *       and in b you get a copy of the reference to that object
  *
  * See the execution @see {@link
  * http://pythontutor.com/javascript.html#code='use%20strict'%3B%0A%0Alet%20a%20%3D%20%5B%7B%7D,%202,%203%5D%3B%20%0Alet%20b%20%3D%20a.slice%28%29%3B%0Ab%5B0%5D.tricky%20%3D%20'yup,%20same%20object'%3B%0Aconsole.log%28a%29%3B%20%20%20&curInstr=3&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D}
  *
  */

'use strict';

let a = [{}, 2, 3];
let b = a.slice();
b[0].tricky = 'yup, same object';
console.log(a);   // →  [ { tricky: 'yup, same object' }, 2, 3 ]
