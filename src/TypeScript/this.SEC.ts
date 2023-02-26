/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 26, 2023
  * @desc TS classes. 
  *       this
  */

class Leaf {
  color: string = 'green';
  changeColor1(season: string): void {
    console.log('original color: ' + this.color);
    switch(season): {
      case 'winter': 
        this.color = 'brown';
        break;
      case 'autumn':
      case 'fall': 
        this.color = 'red';
        break; 
      case 'spring': 
        this.color = 'bright green';
        break;
      default:
        this.color = 'dark green';
        break; 
    }
    console.log('new color: ' + this.color);
  }
}

export let main = async () => {
  let aLeaf: Leaf = new Leaf();
  aLeaf.changeColor1('winter');
};

main();
