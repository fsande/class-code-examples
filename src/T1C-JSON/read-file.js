/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 9.Mar.2021
  * @desc Reading a text file
  *       Uses require with CommonJS modules syntax
  *       
  * @see {@link https://nodejs.org/en/knowledge/file-system/how-to-read-files-in-nodejs/}
  */

'use strict';

const getBuffer= function(fileName) {
  const fs = require('fs');

  try {
    let data = fs.readFileSync(fileName, 'utf8');
    return data;
  } catch(error) {
    console.log('Error:', error.stack);
  }
}

let buffer = getBuffer('input.txt');
console.log(typeof buffer);
for (let i = 0; i < buffer.length; i++) {
  console.log('i: ', i, buffer[i]);
}
