/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 23, 2023
 * @description Events. Buttons Menu example
 * Using 2 classes:
 * Menu:
 *   Has an array of Buttons
 * Button:
 *   console.log when clicked
*/
/** @description Class to hold the (array of) buttons of the page */
var Menu = /** @class */ (function () {
    /** @description Holds an array of Buttons which are created when the Menu is created */
    function Menu() {
        this.buttonContainer = document.querySelector('#menu');
        this.buttons = [
            new Button(this.buttonContainer, 'A'),
            new Button(this.buttonContainer, 'B'),
            new Button(this.buttonContainer, 'C')
        ];
    }
    return Menu;
}());
/** @description Class for the objects buttons to be placed in tha page */
var Button = /** @class */ (function () {
    /**
     * @description Sets up a button object placing it in the page (DOM)
     *              It set up an event listener for the click event on the button
     *              Notifies Menu when clicked, so that Menu can update the <h1>
     * @param containerElement - The DOM element that will host the button
     * @param text - Button text
     */
    function Button(containerElement, text) {
        var _this = this;
        this.text = ''; /** button text */
        this.onClick = function () {
            console.log('clicked: ' + _this.text);
        };
        this.containerElement = containerElement;
        this.text = text;
        var button = document.createElement('button');
        button.textContent = text;
        button.addEventListener('click', this.onClick);
        this.containerElement.append(button);
    }
    return Button;
}());
var menu = new Menu(); // When the page loads we create the Menu
