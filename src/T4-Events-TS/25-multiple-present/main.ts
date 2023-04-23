/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 23, 2023
 * @desc Events. OO Present. Multiple Presents. Main program
 */

import {App} from './app.js';

function main(): void {
  const presentContainer: HTMLElement = document.querySelector('#presents') as HTMLElement;
  const titleContainer: HTMLElement = document.querySelector('#title') as HTMLElement;
  const app = new App(presentContainer, titleContainer);
}

main();
