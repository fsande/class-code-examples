/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 23, 2023
 * @description Events. Menu and buttons with custom Events
 */
/**
 * @class
 * @description Class to hold the (array of) buttons of the page
 */
var Menu = /** @class */ (function () {
    /**
     * @description Holds an array of Buttons creat0ed in the Menu constructor
     *              Class attributes are declared and initialized in constructor
     */
    function Menu(buttonContainer, /** The The DOM element that will host the button */ statusBar, /** The The DOM element that will host the <h1> text with the button info */ buttons) {
        if (buttonContainer === void 0) { buttonContainer = document.querySelector('#menu'); }
        if (statusBar === void 0) { statusBar = document.querySelector('#status-bar'); }
        if (buttons === void 0) { buttons = [new Button(buttonContainer, 'A'), new Button(buttonContainer, 'B'), new Button(buttonContainer, 'C')]; }
        var _this = this;
        this.buttonContainer = buttonContainer;
        this.statusBar = statusBar;
        this.buttons = buttons;
        /**
         * @method showButtonClicked
         * @description prints the button changing the DOM
         */
        this.showButtonClicked = function (event) {
            _this.statusBar.textContent = event.detail.buttonName + ' was clicked';
        };
        document.addEventListener('button-clicked', this.showButtonClicked);
    }
    return Menu;
}());
/**
 * @class
 * @description Class for the buttons objects to be placed in tha page
 */
var Button = /** @class */ (function () {
    /**
     * @description Sets up a button object placing it in the page (DOM)
     *              It set up an event listener for the click event on the button
     *              Notifies Menu when clicked, so that Menu can update the <h1>
     * @param {Element} containerElement - The DOM element that will host the button
     * @param {String} text - Button text
     */
    function Button(containerElement, text) {
        var _this = this;
        this.text = ''; /** The button text */
        /**
         * @method onClick
         * @description Event handler method for click events on the button
         *              It adds an EVENT_INFO object to the customEvent
         */
        this.onClick = function () {
            var EVENT_INFO = { buttonName: _this.text };
            document.dispatchEvent(new CustomEvent('button-clicked', { detail: EVENT_INFO }));
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
new Menu();
