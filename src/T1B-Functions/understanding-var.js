/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 16.ene.2020
	* @desc Understanding var
	*
  * Q: What happens if we try to print "i" at the end of the loop?
  * The value of "i"  is readable outside of the for-loop because variables declared with var have function scope
  */

function printMessage(message, times) {
  for (var i = 0; i < times; i++) {
    console.log(message);
  }
  console.log('Value of i is ' + i);
}
printMessage('hello', 3);

function meaningless() {
  var x = 10;
	if (x > 0) {
	  var y = 10;
	}
	console.log('y is ' + y);
}

meaningless();
console.log('y is ' + y);
