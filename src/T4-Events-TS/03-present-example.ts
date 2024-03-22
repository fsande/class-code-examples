/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 6, 2023
 * @description Present Example
 *              The openPresent listener function replaces the URL of the image shown
 *              in the HTML code (which selector is "img")
 */


/** @description Listener function */
const openPresent = function(): void {
  let image: HTMLImageElement = document.querySelector('img')! as HTMLImageElement;
  const NEW_IMAGE_URL = 'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif';
  image.src = NEW_IMAGE_URL;
  image.removeEventListener('click', openPresent);
  return;
};

const main = function(): void {
  const image: HTMLImageElement = document.querySelector('img')! as HTMLImageElement;
  image.addEventListener('click', openPresent);
};

main();
