/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 6, 2023
 * @description JS Events. 2 Events Listeners
 */
function onOuterClick() {
    outer.classList.add('selected');
    console.log('Outer clicked!');
}
function onInnerClick() {
    inner.classList.add('selected');
    console.log('Inner clicked!');
}
function onResetClick() {
    inner.classList.remove('selected');
    outer.classList.remove('selected');
}
var outer = document.querySelector('#outer');
var inner = document.querySelector('#inner');
var reset = document.querySelector('button');
outer.addEventListener('click', onOuterClick);
inner.addEventListener('click', onInnerClick);
reset.addEventListener('click', onResetClick);
