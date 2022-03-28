/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 20.feb.2020
 * @desc Adding a method to an object
 *       A method is an object property that is a function (or a function within the context of an object)
 */

'use strict';

let person = {};

person.emote = function() {
  console.log('(っ˘̩╭╮˘̩)っ'); 
};

person.emote(); // → sad face - (っ˘̩╭╮˘̩)っ
