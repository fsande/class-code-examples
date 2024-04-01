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
import { App } from './app.js';
function main() {
    const presentContainer = document.querySelector('#presents');
    const titleContainer = document.querySelector('#title');
    const app = new App(presentContainer, titleContainer);
}
main();
