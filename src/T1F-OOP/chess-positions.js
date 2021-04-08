/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 08.Apr.2021
 * @desc Destructuring assignmet
 *       A fancy example of the use of destructuring assignment
 En algunos de los ejemplos que se han usado en clase se ha usado asignación por "desestructuración" (*destructuring assignment*)

 * @tutorial {@link https://javascript.info/destructuring-assignment}
 */

'use strict'; 

/** 
  * Class to represent 2 chess board positions.
  * Each position is a pair (array) (row, column).
  * One position corresponds to a black piece and the other is for a white piece.
  */
class ChessPositions {
  #black = []; /** @private */ // Position of the black piece 
  #white = []; /** @private */ // Position of the black piece 

  /**
    * The constructor takes an object as parameter and has a default parameter. 
    * If no parameter is passed, it uses the default parameter, which is an empty object ({}).
    * If the parameter is present, it can define the white position the black position or both.
    * In this case the function uses destructuring assignment to define the positions.
    */
  constructor({black: [blackRow, blackColumn] = [], white: [whiteRow, whiteColumn] = []} = {}) {
    this.#black = [blackRow, blackColumn];
    this.#white = [whiteRow, whiteColumn];
  }

  getWhitePosition() {
    return this.#white;
  }

  getBlackPosition() {
    return this.#black;
  }
}

// If created with no parameters, it uses the default parameter
let positions1 = new ChessPositions();
console.log("positions1: ", positions1.getBlackPosition(), positions1.getWhitePosition());  // positions1:  [ undefined, undefined ] [ undefined, undefined ]

// If created passing the "black" position, it uses white = [] (equivalent to white = [undefined, undefined])
let positions2 = new ChessPositions({black: [2, 3]});
console.log("positions2: ", positions2.getBlackPosition(), positions2.getWhitePosition());  // positions2:  [ 2, 3 ] [ undefined, undefined ]

// Here the white positon is defined and black results undefined
let positions3 = new ChessPositions({white: [4, 5]});
console.log("positions3: ", positions3.getBlackPosition(), positions3.getWhitePosition()); // positions3:  [ undefined, undefined ] [ 4, 5 ]

// Now we define both white and black positions (this should be the usual case)
let positions4 = new ChessPositions({black: [1, 2], white: [3, 4]});
console.log("positions4: ", positions4.getBlackPosition(), positions4.getWhitePosition()); // positions4:  [ 1, 2 ] [ 4, 5 ]
