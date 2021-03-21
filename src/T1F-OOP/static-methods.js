/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 20.feb.2020
 * @desc Static methods example
 *
 * A static method is a function that is bound to the class, not an object. 
 * A static method cannot be called from an instance of the class.
 *
 * One of the core concepts of OOP is encapsulation. 
 * An important part of encapsulation is that data (object properties) should not be directly 
 * accessed or modified from outside the object. 
 * To access or modify a property we would use a getter (access) or a setter (modify)
 * 
 * The trailing underscore in the properties names is another example of a convention. 
 */

'use strict';

class User {
  constructor(name, age, email) {
    this.name_ = name;
    this.age_ = age;
    this.email_ = email;
  }

  increaseAge() {
    this.age_ += 1;
  }

  static staticMethod() {
    console.log('I am a static method');
  }

  getName() {
    return this.name_;
  }

  setName(newName) {
    this.name_ = newName;
  }

  getAge() {
    return this.age_;
  }
}

let john = new User('John', 45, 'john@ull.es');
john.increaseAge();
console.log('Age: ', john.getAge());
User.staticMethod();
// john.staticMethod();    // Returns Typerror since staticMethod is not a john's method

let mary = new User('Mary', 25, 'mary@ull.es');
console.log(mary.getName());
mary.setName('Helen Mary');
console.log(mary.getName());
