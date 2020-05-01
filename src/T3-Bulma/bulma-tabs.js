/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 24.apr.2020
 * @desc Bulma Tabs
 */

"use strict";

function openTab(evt, tabName) {
  let content, tablinks;
  content = document.getElementsByClassName("content-tab");
  for (let i = 0; i < content.length; i++) {
      content[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (let i = 0; i < content.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" is-active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " is-active";
}
