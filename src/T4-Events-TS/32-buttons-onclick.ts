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
class Button {
  private containerElement: HTMLElement;  /** HTML container for the button */
  private text: string;

  /**
   * @constructor
   * @description Sets up a button object placing it in the page (DOM)
   *              It set up an event listener for the click event on the button
   * @param containerElement - The DOM element that will host the button
   * @param text - Button text
   */
  constructor(containerElement: HTMLElement, text: string) {
    this.containerElement = containerElement;
    this.text = text;

    let button: HTMLButtonElement = document.createElement('button');
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
  private onClick() {
    console.log('clicked: ' + this.text);
    console.log(this);
  }
}

function main(): void {
  const buttonContainer: HTMLElement = document.querySelector('#menu')! as HTMLElement;
  const button1: Button = new Button(buttonContainer, 'A');
  const button2: Button = new Button(buttonContainer, 'B');
  const button3: Button = new Button(buttonContainer, 'C');
}

main();
