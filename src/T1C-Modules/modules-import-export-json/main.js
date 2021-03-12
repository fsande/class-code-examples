// https://blog.logrocket.com/es-modules-in-node-today/

'use strict';

import {createRequire} from 'module';
const require = createRequire(import.meta.url);
import {sayLanguage, student} from './module-f.js';

console.log('Executing main.js');
console.log(sayLanguage('JavaScript'));
console.log(student);


// Add a property to student object:
student.url = "https://stackabuse.com/reading-and-writing-json-files-with-node-js/";
console.log(student);

// Writing JSON to a File
// Using fs.writeFileSync
let outputData = JSON.stringify(student);
const fs = require('fs');
fs.writeFileSync('student-2.json', outputData);
