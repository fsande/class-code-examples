/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 16, 2023
 * @desc Tic Tac Toe Example. Initial Code
 */
const onClick = function (event) {
    const X_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';
    const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';
    const element = event.target; // Get the element that was clicked
    // Create an <img> tag with the X img src
    const image = document.createElement('img');
    image.src = X_IMAGE_URL;
    // Append that <img> tag to the element
    element.appendChild(image);
};
const main = function () {
    // All elements that have grid and div (all divs)
    // const gridItems: NodeListOf<Element> = document.querySelectorAll('#grid div')! as NodeListOf<Element>
    // const gridItems: HTMLElement[] = [...document.querySelectorAll('#grid div')]; 
    // const gridItems: HTMLElement[] = Array.from(document.querySelectorAll('#grid div'));
    const gridItems = document.querySelectorAll('#grid div');
    // Add a listener to all thouse elements 
    for (const item of gridItems) {
        item.addEventListener('click', onClick);
    }
};
main();
/*
function main(): void {
  const image: HTMLImageElement = document.querySelector('img')! as HTMLImageElement;
  image.addEventListener('click', openPresent);
}

main();
*/
