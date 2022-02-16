/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 26.Feb.2021
  * @desc Function Parameters
  *       JavaScript passes all arguments to a function by value
  *       In this code, the situation is that the item passed in is passed by value. 
  *       But the item that is passed by value is itself a reference. 
  *       Technically, this is called call-by-sharing.
  *       In practical terms, this means that if you change the parameter itself (as with num and obj2), that won't affect the item that was fed into the parameter. 
  *       But if you change the internals of the parameter, that will propagate back up (as with obj1).
  * 
  * @see {@link https://www.w3schools.com/js/js_function_parameters.asp}
  * @see {@link https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_sharing}
  * @see {@link https://javascript.info/function-basics}
  */

"use strict";

function changeStuff(param1, param2, param3) {
  param1 = param1 * 10;
  param2.item = "changed";
  param3 = {item: "changed"};
}

let num = 10;
let obj1 = {item: "unchanged"};
let obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log(num);
console.log(obj1.item);
console.log(obj2.item);
