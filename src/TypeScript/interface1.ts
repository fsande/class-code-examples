/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 26, 2023
  * @desc Interfaces
  */

// An interface declaration is another way to name an object type:
interface Dimension {
  width: string;
  height: string;
}

function printSize(dimension: Dimension): void {
  console.log('The image width is ' + dimension.width);
  console.log('The image height is ' + dimension.height);
}

export let main = async () => {
  let image: Dimension = {
    width: '200px',
    height: '300px'
  };
  printSize(image);
};

main();
