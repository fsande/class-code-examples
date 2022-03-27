/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 14.Mar.2021
 * @desc Duck Typing
 *       When an object's methods and properties determine valid semantics
 *       ... Rather than its class or the class that it inherits from
 *       If it looks like a duck and it quacks like a duck… it's a duck
 *       With normal typing, suitability is determined by an object's type
 *       In duck typing, an object's suitability is determined by the presence 
 *       of certain methods and properties, rather than the type of the object itself
 *
 *       In a class-based object-oriented programming language (C++, for example) 
 *       to make both objects look like a duck you must inherit their classes from a 
 *       common "interface" class, so the compiler would let you call duck methods on them. 
 *       That is called a strong typing.          
 *       In this example, the check function checks whether the passed object looks like a duck 
 *       (it checks appearance and its' ability to quack). 
 *       We pass two different objects to it and it will return true on both. 
 *       Besides the appearance and quacking these may be completely different things, 
 *       but IN THIS PARTICULAR check function they behave the same way (have a common interface), 
 *       they both look like a "duck". 
 *       We can call the quack method on both objects (and who cares what they really are).
 */

'use strict';

let duck = {
  appearance: 'feathers',
  quack: function duckQuack(what) {
    console.log(what + ' quack-quack!');
  },
  color: 'black'
};

let someAnimal = {
  appearance: 'feathers',
  quack: function animalQuack(what) {
    console.log(what + ' whoof-whoof!');
  },
  eyes: 'yellow'
};

function check(who) {
  if ((who.appearance === 'feathers') && (typeof who.quack == 'function')) {
    who.quack('I look like a duck!\n');
    return true;
  }
  return false;
}

check(duck);  // true
check(someAnimal);  // true
