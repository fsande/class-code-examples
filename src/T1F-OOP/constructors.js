/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 20.feb.2020
 * @desc Constructors
         Often we need to create many similar objects, like multiple users or menu items and so on
 *       That can be done using constructor functions and the "new" operator
 *       An instance is an object created by using new
 *       A constructor is basically just a function with the new keyword in front of it
 *       It's a convention to make the first letter of a constructor uppercase
 *       This helps distinguish between regular functions and constructors
 *       Constructors should be executed only with new operator
 */

'use strict';

/** 
 * both sadWerewolf and partyWerewolf are instances of Werewolf
 * Note that:
 * A property is added to the constructor's this object
 * this is the object that's returned after calling new Werewolf
 */
function Werewolf(mood) {  // A constructor function
  this.mood = mood;
}

let sadWerewolf = new Werewolf('sad');
let partyWerewolf = new Werewolf('partying');
console.log(partyWerewolf.mood);
