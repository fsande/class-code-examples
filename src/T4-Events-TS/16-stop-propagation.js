/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 24.apr.2020
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
var outer = document.querySelector('#outer');
var inner = document.querySelector('#inner');
outer.addEventListener('click', onOuterClick);
inner.addEventListener('click', onInnerClick);
var reset = document.querySelector('button');
reset.addEventListener('click', onResetClick);
