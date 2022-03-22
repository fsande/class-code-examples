/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Mar 14 2022
  * @desc Hoisting with function expressions
  *        We can reference the let localVar (myFunction) in the main function body
  *        even before it is declared, as long as that code is not executed before the declaration.
  *
  * @see @link{https://blog.bitsrc.io/hoisting-in-modern-javascript-let-const-and-var-b290405adfda}
  * @see
  * @link{https://pythontutor.com/visualize.html#code='use%20strict'%3B%20%20%0A%0Afunction%20main%28%29%20%7B%0A%20%20let%20localVar%20%3D%20myFunction%28%29%3B%0A%20%20console.log%28'Local%20var%3A%20',%20localVar%29%3B%0A%7D%0A%0Aconst%20myFunction%20%3D%20function%28%29%20%7B%0A%20%20console.log%28'Welcome%20to%20PAI'%29%3B%0A%20%20return%2017%3B%20%0A%7D%0A%0Amain%28%29%3B&cumulative=false&curInstr=0&heapPrimitives=&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false}
  */
  
'use strict';  

function main() {
  let localVar = myFunction();
  console.log('Local var: ', localVar);
}

const myFunction = function() {
  console.log('Welcome to PAI');
  return 17;
}

main();
