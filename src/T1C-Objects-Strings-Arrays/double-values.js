/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author       F. de Sande
  * @since 21.02.2020
	* @desc 
  * Exercise from class slides: double (2 * X) the elements X of an array
  * 
  * @fileOverview 
	* 1.-
  * Create a function called doubleValues(arr)
  * It should have one parameter, an array called arr
  * It should return an entirely new array, with the elements of the original array doubled
  * Double each element by multiplying by 2 (regardless of the type)
   
	* 2.-
	* Create a function called doubleValuesInplace
  * It should have one parameter, an array called arr
  * It should double each element in place by multiplying each element by 2 (regardless of the type)
  * It does not return a value
  *
  */

let reverseArray = paramArray => {
  let localArray = [];

	for (element of paramArray) {
		localArray.unshift(element);
	}
	return localArray;
}


function reverseArrayInPlace1(paramArray) {
  let localArray = paramArray.slice(0);
	const LEN = paramArray.length;

	for (let i = 0; i < LEN; i++) {
	  paramArray[i] = localArray[LEN - 1 - i];
    // console.log(`i: ${i}  len-i: ${len - 1 - i}`);
	}
}

function reverseArrayInPlace(paramArray) {
  let temp;
	let len = paramArray.length;
	let mid = Math.floor(len / 2);
  // console.log(`mid: ${mid}`);
	for (let i = 0; i <= mid; i++) {
	  temp = paramArray[i];
		paramArray[i] = paramArray[len - 1 - i];
		paramArray[len - 1 - i] = temp;
	}
}

let doubleValues = function(arr) {
  let doubled = [];
  for(const element of arr) {
    doubled.push(element * 2);
  }
  return doubled;
};

let doubleValuesInPlace = function(arr) {
  for(let element of arr) {
    element *= 2;
  }
};

let doubleValuesInPlace1 = function(arr) {
  for(let i = 0; i < arr.length; i++) {
		arr[i] *= 2;
	}

};


let myArr = [1, 2, 3, 4, 5, 6];
// let newArr = doubleValues(myArr);
// console.log(newArr);
let result = doubleValuesInPlace1(myArr);
console.log(result);
console.log(myArr);
