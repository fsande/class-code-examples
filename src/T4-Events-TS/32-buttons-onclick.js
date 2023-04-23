/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 20, 2023
 * @desc Events. OO Buttons event handler
*/
/**
 * @description Class for the objects buttons to be placed in tha page
 */
var Button = /** @class */ (function () {
    /**
     * @constructor
     * @desc Sets up a button object placing it in the page (DOM)
     *       It set up an event listener for the click event on the button
     * @param containerElement - The DOM element that will host the button
     * @param text - Button text
     */
    function Button(containerElement, text) {
        this.containerElement = containerElement;
        this.text = text;
        var button = document.createElement('button');
        button.textContent = text;
        button.addEventListener('click', this.onClick);
        this.containerElement.append(button);
    }
    /**
     * @method
     * @desc Event handler method for click events on the button
     *       The value of this in this method is not the Button object;
     *       it is the <button> element to which we've attached the onClick event handler
     */
    Button.prototype.onClick = function () {
        console.log('clicked: ' + this.text);
        console.log(this);
    };
    return Button;
}());
function main() {
    var buttonContainer = document.querySelector('#menu');
    var button1 = new Button(buttonContainer, 'A');
    var button2 = new Button(buttonContainer, 'B');
    var button3 = new Button(buttonContainer, 'C');
}
main();
/*

class Button {

  constructor(containerElement: HTMLElement, text: string) {
    this.containerElement = containerElement;

    let button = document.createElement('button');
    button.textContent = text;  // textContent is a property of (DOM) Node
    this.containerElement.append(button);
  }
}

*/
