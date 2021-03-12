/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 12.Mar.2021
  * @desc Module that imports data from a JSON file
  *       Uses require with ES6 modules syntax
  *       ES6 Modules in Node >= 14 no longer have require by default.
  *       If you want to add it, put this code at the top of your file:
  *         import { createRequire } from 'module';
  *         const require = createRequire(import.meta.url);
  *       
  * @see {@link https://nodejs.org/api/modules.html#modules_module_createrequire_filename}
  *
  * Reading and Writing JSON Files with Node.js
  * @see {@link https://stackabuse.com/reading-and-writing-json-files-with-node-js/}
  */

'use strict';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

let jsonData = require('./capitals.json');
console.log(typeof jsonData);
console.log('Lista: ');

for (const property in jsonData) {
  console.log(property +  ' is ' + jsonData[property].country, ' ', jsonData[property].city);
}
