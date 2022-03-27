/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since March 27 2022
 * @desc If there’s this inside a function, it expects to be called in an object context
 *       Without strict mode, a standalone function's  this refers to the global object
 */

// 'use strict';

const speak = function() {
  switch(this.nationality) {  // this should refer to the object that the method was called on
    case 'Japanese':
      console.log('nyan');
      break;
    case 'American':
      console.log('meow');
      break;
    default:
      console.log('default cat noise');
      break;
  } 
}

speak();
