/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 24.apr.2020
 * @desc JS Events. 2 Events Listeners. Capturing
 */

'use strict';

function onOuterClick(event) {
  outer.classList.add('selected');
  console.log('Outer clicked!');
  // event.stopPropagation();
}

function onInnerClick() {
  inner.classList.add('selected');
  console.log('Inner clicked!');
}

function onResetClick() {
  inner.classList.remove('selected');
  outer.classList.remove('selected');
}

const outer = document.querySelector('#outer');
const inner = document.querySelector('#inner');

outer.addEventListener('click', onOuterClick, { capture: true});
inner.addEventListener('click', onInnerClick, { capture: true});

const reset = document.querySelector('button');
reset.addEventListener('click', onResetClick);
