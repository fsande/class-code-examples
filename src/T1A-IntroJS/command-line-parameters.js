/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Feb 16 2022
 * @desc Using command line parameters with the yargs module
 *       Excute the program:
 *                           $ node command-line-parameters.js -x 10 -y 21
 * @see {@link https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/}
 * @see {@link https://github.com/yargs/yargs/blob/main/docs/examples.md}
 *
 */

'use strict';

let argv = require('../node_modules/yargs')(process.argv.slice(2)).argv;

function main() {
  console.log('Params (%d, %d)', argv.x, argv.y);
}

if (require.main === module) {
  main();
}
