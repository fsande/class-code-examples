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

class Team {    
  teamFirst: string = '';    
  teamLast: string = '';     
  makeName(): string {        
    return this.teamFirst + ' ' + this.teamLast;    
  }
} 

class Supporter {    
  team: Team;     
  cheer(name: string): string {        
    return 'go ' + name + '!!!';    
  }
} 

export let main = async () => {
  let canarias: Team = new Team();
  canarias.teamFirst = 'Lenovo';
  canarias.teamLast = 'Tenerife';
  let hincha: Supporter = new Supporter();
  hincha.team = canarias;
  console.log(hincha.cheer(hincha.team.makeName()).toUpperCase());
};

main();
