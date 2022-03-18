/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 20.ene.2020
  * @desc Call by Sharing
  *
  * @see {@link https://medium.com/@arunk.s/javascript-and-call-by-sharing-71b30e960fd4}
  */

'use strict';

let point = {'x':5, 'y':3}; 

const changePoint = function(point, distance) {
  point.x = 0;
  console.log('in function:', point);
};

changePoint(point);
console.log('outside', point);
