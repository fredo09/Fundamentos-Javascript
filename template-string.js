/**
 * Template-String
 */

 let nombre = 'Spiderman';
 let real = 'Peter Parker'

 console.log(`${nombre } ${real}`);

 function getNombre(){
   return `${nombre } es ${real} `;
 }

console.log(`El Nombre real de: ${getNombre()}`);
