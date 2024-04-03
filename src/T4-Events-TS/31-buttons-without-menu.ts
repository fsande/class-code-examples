/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 20, 2023
 * @description Events. OO Buttons without menu
 *              The code uses the Non-Null Assertion Operator (!)
 * @see https://medium.com/@bobjunior542/how-to-use-the-operator-in-typescript-for-cleaner-more-efficient-code-7fd528f8f8b1
*/

/**
 * @class
 * @description Class for the objects buttons to be placed in tha page
 */
class Button {
  /**
   * @constructor 
   * @description Sets up a button object placing it in the page (DOM)
   * @param containerElement - The DOM element that will host the button
   * @param text - Button text
   */
  constructor(private containerElement: HTMLElement, text: string) {
    this.containerElement = containerElement;

    let button: HTMLButtonElement = document.createElement('button');
    button.textContent = text;  // textContent is a property of (DOM) Node
    this.containerElement.append(button);
  }
}

function main(): void {
  const buttonContainer: HTMLElement = document.querySelector('#menu')! as HTMLElement;
  const button1: Button = new Button(buttonContainer, 'A');
  const button2: Button = new Button(buttonContainer, 'B');
  const button3: Button = new Button(buttonContainer, 'C');
}

main();
