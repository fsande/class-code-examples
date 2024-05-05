/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 24.apr.2020
 * @desc Bulma. Notifications
 * The Bulma package does not come with any JavaScript. 
 * Here is however an implementation example, which sets the click handler for Bulma delete all on the page, in vanilla JavaScript.
 */

"use strict";

document.addEventListener('DOMContentLoaded', () => {
  let notification;

  (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
    notification = $delete.parentNode;

    $delete.addEventListener('click', () => {
      notification.parentNode.removeChild(notification);
    });
  });
});
