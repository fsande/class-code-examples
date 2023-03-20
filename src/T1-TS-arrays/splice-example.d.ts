/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 2, 2023
 * @desc splice example
 *       splice(start[, deleteCount[, item1[, item2[, ...]]]])
 *      removes elements (in place) from an Array, and optionally inserts elements
 *
 *      1st parameter, start specifies the index (inclusive) to start modifying the Array
 *      Negative indexes start from left
 *      Indexes greater than last index is set to the last index
 *
 *      2nd parameter, deleteCount specifies the number of elements to be deleted
 *      Omitting this argument will cause all elements after start to be removed
 *
 *      All arguments after the second parameter are elements that will be added to the original Array
 *      These elements will be inserted at the start specified
 *      If there are no parameters after the second, splice will only remove elements
 *      Returns the elements removed as an Array
 *
 *      In brief:
 *      - Removes elements from an existing Array
 *      - It optionally replaces those elements with other elements
 *      - Gives back the elements that were removed as an Array
 *
 * @see @link{https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice}
 */
export declare function main(): void;
