/**
 * https://blog.logrocket.com/es-modules-in-node-today/
 * https://stackoverflow.com/questions/31931614/require-is-not-defined-node-js
 * 
 * ES Modules in Node >= 14 no longer have require by default.
 * 
 * If you want to add it, put this code at the top of your file:
 *   import { createRequire } from 'module';
 *   const require = createRequire(import.meta.url);
 * Source: https://nodejs.org/api/modules.html#modules_module_createrequire_filename
 *         https://nodejs.org/api/module.html#module_module_createrequire_filename
 * 
 * Reading and Writing JSON Files with Node.js
 *         https://stackabuse.com/reading-and-writing-json-files-with-node-js/
*/

'use strict';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Using require:
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
