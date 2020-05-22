/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 04.feb.2020
	* @desc Type coercion
	*
  */

console.log(5 + 5);
console.log("5" + 5);
console.log("five" + 5);
console.log(5 == "5");
console.log(5 === "5");
console.log(5 * undefined);
console.log(5 * null);


console.log('' === '0');          // →  false
console.log('' === 0);            // →  false
console.log(0 === '0');           // →  false
console.log(NaN === NaN);         // →  still weirdly false  
console.log([''] === '');         // →  false
console.log(false === undefined); // →  false
console.log(false === null);      // →  false
console.log(null === undefined);  // →  false
