/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 20.feb.2020
 * @desc Constructors prototype
 *       All constructors have a property named prototype
 *       The default value of a constructor's prototype is a plain, empty object that derives from Object.prototype
 *       Every instance created with the constructor will have that object as its actual prototype
 *       Note that there's a difference between
 *        - The constructor's prototype property that's used to set an instance's prototype versus
 *        - The constructor's actual prototype…
 *       Can you guess what that is? Function.prototype
 */

'use strict';

function Werewolf(mood) {
  this.mood = mood;
}

let sadWerewolf = new Werewolf('sad');
let partyWerewolf = new Werewolf('partying');
console.log(partyWerewolf.mood);               // → partying

/** All constructors have a property named prototype
 *  We could use a constructor's prototype to add a howl method on every instance of Werewolf
 */
Werewolf.prototype.howl = function(thing) {
  console.log('Werewolf howls at the ' + thing + '.');
}
sadWerewolf.howl('moon');                      // →  Werewolf howls at the moon.
partyWerewolf.howl('bowl of chips');          // →  Werewolf howls at the bowl of chips.
