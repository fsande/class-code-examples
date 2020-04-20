/**
 * @author       F. de Sande
 * @since 31.01.2020
 * 
 * onClick: executes when the button is clicked
 * 
 */


function onClick() { 
  console.log('clicked');
}

const BUTTON = document.querySelector('button');
BUTTON.addEventListener('click', onClick);
