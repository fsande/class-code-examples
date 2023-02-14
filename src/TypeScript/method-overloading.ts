/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Feb 14, 2023
 * @desc Method overloading 
 * @see {@link https://www.typescripttutorial.net/typescript-tutorial/typescript-function-overloadings/}
 */

/**
 * A class representing a counter
 * The count() method is overloaded. It returns a single number (counter) or an array
 */
class Counter {
  private current: number = 0;
  count(): number;
  count(target: number): number[];
  count(target?: number): number | number[] {
    if (target) {
      let values = [];
      for (let start = this.current; start <= target; start++) {
        values.push(start);
      }
      this.current = target;
      return values;
    }
    return ++this.current;
  }
}

export let main = async () => {
  let counter = new Counter();
  console.log(counter.count()); // return a number
  console.log(counter.count(10)); // return an array
};

main();
