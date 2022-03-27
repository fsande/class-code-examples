/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 20.feb.2020
 * @desc The this binding. In methods, this refers to the object that the method was called on
 */

'use strict';

const speak = function() {
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

let japaneseCat = { nationality: 'Japanese', speak: speak };
let americanCat = { nationality: 'American', speak: speak };

japaneseCat.speak();    // →  nyan
americanCat.speak();    // →  meow

// Calling the speak function using its call method
// The call method takes this as its first parameter
speak.call(americanCat);
