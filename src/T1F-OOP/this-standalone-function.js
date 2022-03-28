/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 20.feb.2020
 * @desc this in a function not attached to an object
 *       In this case this is undefined in strict mode
 *       If we try to access this.name, there will be an error
 *       In non-strict mode the value of this in such case will be the global object (window in a browser)
 *       This is a historical behavior that 'use strict' fixes
 */

// 'use strict';              

outside = 5;   // Declaring without let-const
               // If you use strict, the previous line is an error

const myFunc = function() {
  console.log(this);
  console.log(this.outside);
}

myFunc();    // →  5  this is the global object!
