"use strict";
/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 11, 2023
  * @desc TS classes. Constructor
  *       the class TwitterProfile has 3 attributes and a constructor
  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
class TwitterProfile {
    name;
    followers;
    verified = false;
    constructor(name, followers, verification) {
        this.name = name;
        this.followers = followers;
        this.verified = verification;
    }
}
let main = async () => {
    let myProfile = new TwitterProfile('Sande', 32, true);
    console.log(myProfile.name + ' has ' + myProfile.followers + ' followers on Twitter!');
    console.log(myProfile.name + ' is verified: ' + myProfile.verified);
};
exports.main = main;
(0, exports.main)();
