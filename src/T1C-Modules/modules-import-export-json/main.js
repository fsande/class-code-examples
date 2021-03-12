/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 12.Mar.2021
  * @desc Import / Export from ES6 Modules
  *       This code uses data imported form ./module-f.js module
  *       
  * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
  * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
  */

'use strict';

import {createRequire} from 'module';
const require = createRequire(import.meta.url);      // To use require
import {sayLanguage, student} from './module-f.js';  // Imports from a module

console.log('Executing main.js');
console.log(sayLanguage('JavaScript'));
console.log(student);

// Add a new property to the student object:
student.url = "https://stackabuse.com/reading-and-writing-json-files-with-node-js/";
console.log(student);

// Writing JSON to a File
// Using fs.writeFileSync
let outputData = JSON.stringify(student);
const fs = require('fs');
fs.writeFileSync('student-2.json', outputData);
