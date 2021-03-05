/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 12.dec.2019
	* @desc Callback example
	*
  * @see {@link https://medium.com/@javifont/javascript-qu%C3%A9-demonios-es-un-callback-9d0a548e3bf4}
  * @fileOverview 
  * Un Callback (llamada de vuelta) es una función que se ejecutará después de que 
  * otra función haya terminado de ejecutarse, de aquí el nombre de Callback.
  *
	* En este ejemplo, obsérvese primero lo que ocurre con las llamadas (y la ejecución) de first() y second()
  * Estúdiese a continuación el ejemplo del callback en doHomework()
  * doHomework() recibe como segundo parámetro una función
  * 
	* No es que JavaScript no haya ejecutado las funciones en el orden que queríamos, 
  * lo que sucede es que JavaScript no ha esperado a la respuesta de first para avanzar y ejecutar second.
  * ¿Por qué te mostramos esto? 
	* Porque no podemos sencillamente llamar a una función detrás de otra esperar que se ejecuten en el orden correcto. 
	* Los Callbacks son un modo de asegurarse de que cierto código no se ejecuta hasta que otro código haya terminado de ejecutarse.
  */

'use strict';

function first(){
  // Simular retardo
  setTimeout(function(){
    console.log(1);
  }, 500);
}

function second(){
  console.log(2);
}

first();
second();

///////////////////////////

function doHomework(subject, callback) {
  console.log(`Starting my ${subject} homework.`);
  callback();
}

doHomework('Matemáticas', function() { console.log('Finished my homework'); });
doHomework('Filosofía', function() { console.log('Finished my homework'); });
