/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 20, 2023
 * @description Events. OO Buttons without menu
*/
/**
 * @class
 * @description Class for the objects buttons to be placed in tha page
 */
var Button = /** @class */ (function () {
    /**
     * @constructor
     * @desc Sets up a button object placing it in the page (DOM)
     * @param containerElement - The DOM element that will host the button
     * @param text - Button text
     */
    function Button(containerElement, text) {
        this.containerElement = containerElement;
        this.containerElement = containerElement;
        var button = document.createElement('button');
        button.textContent = text; // textContent is a property of (DOM) Node
        this.containerElement.append(button);
    }
    return Button;
}());
function main() {
    var buttonContainer = document.querySelector('#menu');
    var button1 = new Button(buttonContainer, 'A');
    var button2 = new Button(buttonContainer, 'B');
    var button3 = new Button(buttonContainer, 'C');
}
main();
