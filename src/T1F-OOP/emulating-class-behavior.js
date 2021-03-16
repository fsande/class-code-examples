/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 15.Mar.2021
 * @desc Emulating class Behavior with prototypes
 *       At Line A, we have to set FatFreeFood.prototype equal to a new object, 
 *       whose prototype reference is to Food.prototype. 
 *       If we fail to do this, our "child classes" won't have access to "superclass" methods.
 *
 *       Unfortunately, this results in the rather bizarre behavior that FatFreeFood.constructor 
 *       is Function... Not FatFreeFood. 
 *       So, to keep everything sane, we have to manually set FatFreeFood.constructor by hand at Line B.
 * {@link https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes}
 * 
 * The "old style" construction of objects in JS:
 *    1.- Using the literal syntax, e.g. myObj = { ... }
 *    2.-Using the more common "constructor pattern"
 *    3.-Using the newer Object.create syntax
 * {@link https://www.vikingcodeschool.com/falling-in-love-with-javascript/constructing-objects}
 */

'use strict';

function Food(name, protein, carbs, fat) {
  this.name = name;
  this.protein = protein;
  this.carbs = carbs;
  this.fat = fat;
}

Food.prototype.toString = function () {
  return `${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`;
};

function FatFreeFood (name, protein, carbs) {
  Food.call(this, name, protein, carbs, 0);
}

// Setting up "subclass" relationships
// =====================
// LINE A :: Using Object.create to manually set FatFreeFood's "parent".
FatFreeFood.prototype = Object.create(Food.prototype);

// LINE B :: Manually (re)setting constructor reference (!)
Object.defineProperty(FatFreeFood.constructor, "constructor", {
  enumerable : false,
  writeable      : true,
  value             : FatFreeFood
});

let healthyFood = new FatFreeFood('vegetables', 0, 0, 0);
console.log(healthyFood.toString());
