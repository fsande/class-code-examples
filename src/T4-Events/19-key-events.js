/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 14.may.2020
	* @desc JS Events. Keyboard Events
  * @see {@link https://javascript.info/keyboard-events}
*/

"use strict";

kinput.onkeydown = kinput.onkeyup = kinput.onkeypress = handle;

let lastTime = Date.now();

function handle(event) {
  if (form.elements[event.type + 'Ignore'].checked) return;

  let text = event.type +
    ' key=' + event.key +
    ' code=' + event.code +
    (event.shiftKey ? ' shiftKey' : '') +
    (event.ctrlKey ? ' ctrlKey' : '') +
    (event.altKey ? ' altKey' : '') +
    (event.metaKey ? ' metaKey' : '') +
    (event.repeat ? ' (repeat)' : '') +
    "\n";

  if (area.value && Date.now() - lastTime > 250) {
    area.value += new Array(81).join('-') + '\n';
  }
  lastTime = Date.now();

  area.value += text;

  if (form.elements[event.type + 'Stop'].checked) {
    event.preventDefault();
  }
}
