/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 24.apr.2020
 * @desc Bulma. Progress Bar with JS
 * @see {@link https://bulma.io/documentation/components/tabs/}
 * @see {@link https://stackoverflow.com/questions/44891771/bulma-css-tab-switcher}
 */

"use strict";

function switchToAll() {
  removeActive();
  hideAll();
  $("#all-tab").addClass("is-active");
  $("#all-tab-content").removeClass("is-hidden");
}

function switchToAdaptiveDesign() {
  removeActive();
  hideAll();
  $("#adaptivedesign-tab").addClass("is-active");
  $("#adaptivedesign-tab-content").removeClass("is-hidden");
}

function switchToJquery() {
  removeActive();
  hideAll();
  $("#jquery-tab").addClass("is-active");
  $("#jquery-tab-content").removeClass("is-hidden");
}

function switchToAjax() {
  removeActive();
  hideAll();
  $("#ajax-tab").addClass("is-active");
  $("#ajax-tab-content").removeClass("is-hidden");
}

function switchToAngularJS() {
  removeActive();
  hideAll();
  $("#angularjs-tab").addClass("is-active");
  $("#angularjs-tab-content").removeClass("is-hidden");
}

function removeActive() {
  $("li").each(function() {
    $(this).removeClass("is-active");
  });
}

function hideAll(){
  $("#all-tab-content").addClass("is-hidden");
  $("#adaptivedesign-tab-content").addClass("is-hidden");
  $("#jquery-tab-content").addClass("is-hidden");
  $("#ajax-tab-content").addClass("is-hidden");
  $("#angularjs-tab-content").addClass("is-hidden");
}
