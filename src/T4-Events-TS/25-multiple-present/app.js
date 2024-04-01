/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 23, 2023
 * @description Events. OO Present. Multiple Presents. App Class
*/
import { Present } from './present.js';
import { PRESENT_SOURCES } from './present-sources.js';
/**
 * @description Class to represent a set of presents
 *              The class holds Present objects in an array
 */
export class App {
    /**
     * @constructor
     * @description Fills the presents array
     * @param presentContainer- The DOM element that hosts the presents
     * @param titleContainer - The DOM element that holds the header text
     */
    constructor(presentContainer, titleContainer) {
        this.presents = []; /** Array of presents */
        this.presentContainer = presentContainer;
        this.titleContainer = titleContainer;
        this.fillPresentContainer();
    }
    /**
     * @method
     * @description Creates the Present objects and stores them in the presents array
     */
    fillPresentContainer() {
        for (const source of PRESENT_SOURCES) {
            const present = new Present(this.presentContainer, source);
            this.presents.push(present);
        }
    }
}
