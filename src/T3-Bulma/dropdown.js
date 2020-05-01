/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 24.apr.2020
 * @desc Bulma. Components Dropdown menu
 * @see {@link https://bulma.io/documentation/components/dropdown/}
 */

"use strict";

//DOMContentLoaded - it fires when initial HTML document has been completely loaded
document.addEventListener('DOMContentLoaded', function () {
  // querySelector - it returns the element within the document that matches the specified selector
  let dropdown = document.querySelector('.dropdown');

  //addEventListener - attaches an event handler to the specified element.
  dropdown.addEventListener('click', function(event) {

    //event.stopPropagation() - it stops the bubbling of an event to parent elements, by preventing parent event handlers from being executed
    event.stopPropagation();

    //classList.toggle - it toggles between adding and removing a class name from an element
    dropdown.classList.toggle('is-active');
  });
});
