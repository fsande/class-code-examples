/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 11, 2023
  * @desc TS classes. Method example
  */

class Team {    
    teamFirst: string = '';    
    teamLast: string = '';     
    makeName(): string {        
        return this.teamFirst + ' ' + this.teamLast;    
    }
} 
class Mascot {    
    team: Team;     
    cheer(name: string): string {        
        return 'go ' + name + '!!!';    
    }
} 

export let main = async () => {
  let heels: Team = new Team();
  heels.teamFirst = 'tar';
  heels.teamLast = 'heels';
  let rameses: Mascot = new Mascot();
  rameses.team = heels;
  console.log(rameses.cheer(rameses.team.makeName()).toUpperCase());
};

main();
