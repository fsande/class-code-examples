
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 19, 2023
 * @description Read a JSON object from file
 */

import * as countries from './country-by-abbreviation.json';

const main = function (): void {
  console.log(typeof(countries));  
  console.log(countries);  
  console.log(countries[5].country, countries[5].abbreviation);
}

main();
