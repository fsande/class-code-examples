/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 6, 2023
 * @description Present Example
 *              Using CSS to display/hide elements
 */

function openPresent(event: Event): void {
  let image = event.currentTarget;
  image.removeEventListener('click', openPresent);

  const giftOutside = document.querySelector('#gift-outside')!;
  const giftInside = document.querySelector('#gift-inside')!;
  giftOutside.classList.add('hidden');
  giftInside.classList.remove('hidden');
}

function main(): void {
  const image: HTMLImageElement = document.querySelector('#gift-outside img')! as HTMLImageElement;
  image.addEventListener('click', openPresent);
}

main();
