/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since March 29 2022
 * @desc Without strict mode, in standalone functions, this refers to the global object
 */

// 'use strict';

/**
 * Here speak is a standalone function (not binded to any object)
 */
const speak = function() {
  // console.log('This in the function: ', this);
  console.log('this.nationality: ', this.nationality);  // →  undefined
  switch(this.nationality) {  // this refers to the object that the method was called on
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

// let japaneseCat = { nationality: 'Japanese', speak: speak };
// let americanCat = { nationality: 'American', speak: speak };

// japaneseCat.speak();    // →  nyan
// americanCat.speak();    // →  meow
