/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 04.feb.2020
  * desc @desc break and continue statements
  *
  * @see {@link * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#As_a_DOM_event_handler}
  */

'use strict';

console.log('break: ');
for (let num = 1; num < 30; num++) { 
  if (num % 7 == 0 && num % 3 == 0)
    break; 
  console.log(num);
}

console.log('continue: ');
for(let num = 1; num < 30; num++) { 
  if (num % 7 == 0 && num % 3 == 0)
    continue; 
  console.log(num);
}
