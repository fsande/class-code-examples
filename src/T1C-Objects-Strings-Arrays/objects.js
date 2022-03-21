/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 16.ene.2020
  * @desc Objects
  *
  */

'use strict';

function main() {
  let course = {
    name: 'Programación de Aplicaciones Interactivas',
    section: 3,
    undergraduate: true
  };

  console.log(course.section);      // → 2
  console.log(course['section']);    // → 2

  let exclamation = 'wow!';
  let listOfExclamations = ['golly!', 'gosh!'];
  console.log(exclamation.length, listOfExclamations.length)

  let obj = {};
  function f() {
    console.log("Hi, I'm a method!");
  }
  obj.doStuff = f;


  let obj2 = {
    doStuff: function() {
      console.log("Hi, I'm a method!");
    }
  };


  let obj3 = {};
  obj.doStuff = function() {
    console.log("Hi, I'm a method!");
  };

  console.log('Nothing to see: ', course.nothingToSeeHere);

  course.nothingToSeeHere = 'maybe something';
  console.log(course.nothingToSeeHere);

  delete course.nothingToSeeHere;
  console.log('Nothing to see: ', course.nothingToSeeHere);

  a = {'foo':1, 'bar':2};
  b = a;
  b['baz'] = 3;
  b.qux = 4;
  console.log(a);      // → { foo: 1, bar: 2, baz: 3, qux: 4 }

  // true
  console.log(course.hasOwnProperty('name'));

  // false
  console.log(course.hasOwnProperty('oh no, not here'));

  console.log('name' in course);          // → true
  console.log('oh no, not here' in course);    // → false

  for (property in course) {
    if (course.hasOwnProperty(property)) {
      console.log(property +  " is " + course[property]);
    }
  }
}

main();
