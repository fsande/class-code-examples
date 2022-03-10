/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Mar 10 2022
  * @desc Understanding var
  *
  * Q: What happens if we try to print "i" at the end (outside) of the loop?
  * A: let has block-scope so this results in an error
  */

'use strict';

function printMessage(message, times) {
  for (let i = 0; i < times; ++i) {
    console.log(message);
  }
  console.log('Value of i is ' + i);
}

printMessage('hello', 3);
