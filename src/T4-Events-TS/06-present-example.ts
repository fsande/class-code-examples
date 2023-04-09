/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 6, 2023
 * @description Present Example 
 *              Deletes the initial image using element.innerHTML = '';
 */

function openPresent(event: Event): void {
  let newHeader: HTMLHeadingElement = document.createElement('h1');
  newHeader.textContent = 'Bingo!';
  let newImage: HTMLImageElement = document.createElement('img');
  newImage.src = 'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif';

  let container = document.querySelector('#container')!;
  container.innerHTML = '';
  container.appendChild(newHeader);
  container.appendChild(newImage);
}

function main(): void {
  const image: HTMLImageElement = document.querySelector('img')! as HTMLImageElement;
  image.addEventListener('click', openPresent);
}

main();
