/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 11, 2023
  * @desc Methods
  *       Other than the standard type annotations, TypeScript doesn’t add anything else new to methods. 
  *       Note that inside a method body, it is still mandatory to access fields and other methods via this.
  */

class Point {
  coordX = 10;
  coordY = 10;
 
  scale(factor: number): void {
    this.coordX *= factor;
    this.coordY *= factor;
  }

  toString() : string {
    return('(' + this.coordX + ', ' + this.coordY +')');
  }
}

export let main = async () => {
  const point = new Point();
  point.scale(10);
  console.log('Point:', point.toString());
};

main();
