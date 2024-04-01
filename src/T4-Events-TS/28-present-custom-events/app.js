/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 23, 2023
 * @description OO App class
 */
import { Present } from './present.js';
import { PRESENT_SOURCES } from './present-sources.js';
/**
 * @class
 * @description App Class. Holds and manages multiple presents (objects)
 */
export class App {
    /*
     * @constructor
     * @param {object} presentContainer - DOM element that holds the array of presents
     * @param {object} titleContainer - DOM element that holds the header title of the page
     */
    constructor(presentContainer, titleContainer) {
        this.presents = []; /** Array of presents */
        this.openedCount = 0; /** Holds the number of presents that have been opened */
        /**
         * @method onPresentOpened
         * @description When a present is opened, the method updates the number of opened presents
         *       If it is the last present, modifies the page header message
         */
        this.onPresentOpened = () => {
            this.openedCount++;
            if (this.openedCount === this.presents.length) {
                this.titleContainer.textContent = 'Enjoy your presents!';
            }
        };
        this.presentContainer = presentContainer;
        this.titleContainer = titleContainer;
        this.fillPresentContainer();
        document.addEventListener('present-opened', this.onPresentOpened);
    }
    /**
     * @method fillPresentContainer
     * @description Creates the present objects and stores them in the presents array
     */
    fillPresentContainer() {
        for (const SOURCE of PRESENT_SOURCES) {
            const PRESENT = new Present(this.presentContainer, SOURCE);
            this.presents.push(PRESENT);
        }
    }
}
