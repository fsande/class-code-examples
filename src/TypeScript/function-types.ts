/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 26, 2023
  * @desc Function Types
  *       The StringFormat interface ensures that all the callers of the function that implements it pass in the required arguments: a string and a boolean.
  */

interface StringFormat {
  (str: string, isUpper: boolean): string
}


export let main = async () => {
  let format: StringFormat;
  format = function (str: string, isUpper: boolean): string {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
  };
  console.log(format('En un lugar de la Mancha', true));
};

main();
