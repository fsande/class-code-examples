"use strict";
/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 11, 2023
  * @desc TS classes.
  *       Chaining methods
  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
class Supporter {
    team;
    cheer(name) {
        return 'go ' + name + '!!!';
    }
}
class Team {
    teamFirst = '';
    teamLast = '';
    makeName() {
        return this.teamFirst + ' ' + this.teamLast;
    }
}
let main = async () => {
    let canarias = new Team();
    canarias.teamFirst = 'Lenovo';
    canarias.teamLast = 'Tenerife';
    let hincha = new Supporter();
    hincha.team = canarias;
    console.log(hincha.cheer(hincha.team.makeName()).toUpperCase());
};
exports.main = main;
(0, exports.main)();
