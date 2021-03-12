/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 12.Mar.2021
  * @desc Import / Export from ES6 Modules
  *       This module exports the sayLanguage function and the student (object read from JSON file)
  *       
  * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
  * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
  *
  * Reading and Writing JSON Files with Node.js
  * @see {@link https://stackabuse.com/reading-and-writing-json-files-with-node-js/}
  */

'use strict';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Read the JSON object Using require:
console.log('Using require:');
export const student = require('./student.json');
// console.log(typeof student);
// console.log(student);

// Using fs.readFileSync
// console.log('Using fs.readFileSync:');
// const fs = require('fs');
// let rawdata = fs.readFileSync('student.json');
// let student = JSON.parse(rawdata);
// console.log(typeof student);
// console.log(student);

export function sayLanguage(language) { 
         console.log(`Executing the (exported) sayLanguage Function:`); 
         console.log(`I love ${language}!`); 
       }
