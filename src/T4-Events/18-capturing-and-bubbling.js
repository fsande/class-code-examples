/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 24.apr.2020
	* @desc Events. JS Events. Capturing and Bubbling
  * @see {@link https://javascript.info/bubbling-and-capturing#capturing}
*/

'use strict';

function showCapturingAndBubbling() {
  for(let elem of document.querySelectorAll('*')) {
    elem.addEventListener('click', e => alert(`Capturing: ${elem.tagName}`), true);
    elem.addEventListener('click', e => alert(`Bubbling: ${elem.tagName}`));
  }
}

showCapturingAndBubbling();
