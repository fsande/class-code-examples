/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 16.ene.2020
	* @desc Conditional statements
	*
  * @see {@link https://nodejs.org/api/readline.html}
  */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduzca texto: ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Textointroducido: ${answer}`);
 
	let theNumber = Number(answer);
  if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " + theNumber * theNumber);

    let num = theNumber;
		if (num < 10) {
      console.log("Small");
    } else if (num < 100) {
      console.log("Medium");
    } else {
      console.log("Large");
    }
    

	} else {
    console.log("Hey. Why didn't you give me a number?");
	}

  rl.close();
});
