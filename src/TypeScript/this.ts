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

class Leaf {
  color: string = 'green';
   changeColor(season: string): void {
     console.log('original color: ' + this.color);
     if (season === 'winter') {
       this.color = 'brown';
     } else if (season === 'autumn' || season === 'fall') {
       this.color = 'red';
     } else if (season === 'spring') {
       this.color = 'bright green';
     } else {
       this.color = 'dark green';
     }
     console.log('new color: ' + this.color);
   }
}

export let main = async () => {
  let aLeaf: Leaf = new Leaf();
  aLeaf.changeColor('winter');
};

main();
