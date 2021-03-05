/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 4.Mar.2021
	* @desc for-in loop
  *       Integer properties are sorted, others appear in creation order.
  *       The phone codes go in the ascending sorted order, because they are integers. So we see 1, 34, 41, 44, 49.
  *       
  * @see {@link https://javascript.info/object#the-for-in-loop}
  */

'use strict';

let codes = {
  '49': 'Germany',
  '41': 'Switzerland',
  '44': 'Great Britain',
  '34': 'Spain',
  // ..,
  '1': 'USA'
};

for (let code in codes) {
  console.log(code); // 
}
