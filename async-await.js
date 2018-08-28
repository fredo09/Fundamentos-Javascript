/**
 * Async-Await
 */

let getNombre = async() => {
  //undefined.nombre;
  return 'Alfredo';
}

let saludo = async() => {
  let nombre = await getNombre(); //se espera a que termine de ejecutar
  return `Hola ${nombre}`;
}

saludo().then(message => {
  console.log(message);
})

// getNombre().then(nombre => {
//   console.log(nombre);
// }).catch(e => {
//   console.log("Error de async");
// })
