/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 20.feb.2020
 * @desc This is not bound
 *       In JS, the keyword behaves differently than in most programming languages;
 *       this can be used in any function
 *       The value of this is evaluated during the run-time, depending on the context
 *       For instance, in this code the same function is assigned to two different objects and has different this in the calls
 *       
 * @tutorial {@link https://javascript.info/object-methods}
 */

'use strict';

let user = {name: 'John'};
let admin = {name: 'Admin'};

const sayHi = function() {
  console.log(this.name);
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)
