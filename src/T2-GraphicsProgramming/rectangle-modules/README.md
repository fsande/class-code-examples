 Ha de tenerse en cuenta que:
 * El proyecto ha de compilarse usando tsc (sin pasar parámetros, ni el nombre del fichero a compilar) para que tsc utilice la información del tsconfig.json
 * El código HTML ha de usar la etiqueta script incluyendo type="module" (véase rectangle.html)
 * El código del programa cliente ha de importar el módulo poniendo explícitamente 
   la extensión .js del fichero importado (sentencia import {Rectangle} from './rectangle.js'; )
 * En el fichero tsconfig ha de usarse "module": "es2015",
 * La página rectangulo.html no funciona si se carga directamente desde un navegador, 
   sino que ha de utilizarse un servidor para alojarla (el que configuraron en su máquina 
   virtual o bien usar la extensión live server de VSC).
