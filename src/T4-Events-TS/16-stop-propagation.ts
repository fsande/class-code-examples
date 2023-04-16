/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 16, 2020
 * @description JS Events. Stop propagation
 */

function onOuterClick() {
  outer.classList.add('selected');
  console.log('Outer clicked!');
}

function onInnerClick(event) {
  inner.classList.add('selected');
  console.log('Inner clicked!');
  event.stopPropagation();
}

function onResetClick() {
  inner.classList.remove('selected');
  outer.classList.remove('selected');
}

const outer = document.querySelector('#outer');
const inner = document.querySelector('#inner');
outer.addEventListener('click', onOuterClick);
inner.addEventListener('click', onInnerClick);

const reset = document.querySelector('button');
reset.addEventListener('click', onResetClick);
