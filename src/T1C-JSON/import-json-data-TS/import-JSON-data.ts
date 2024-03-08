/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since March 8, 2024
  * @desc Import data from a local JSON file
  *       Take into account that you have to use 
  *         "resolveJsonModule": true
  *       in your tsconfig.json file
  *    
  * Compile using tsc 
  */

 import capitals from './capitals.json' with { type: 'json' };  // This import style requires "esModuleInterop"
 console.log(capitals);
