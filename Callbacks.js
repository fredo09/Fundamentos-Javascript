/**
 * Collbacks
 */


// setTimeout(() => {
//   console.log('Hola Mundo');
// }, 3000);

let UsuarioById = (id, callback) => {
  let usuario = {
    Nombre : 'Alfredo',
    id
  }
  callback(usuario);
}

UsuarioById(20,(usuario) => {
  console.log('Datos del usuario: ', usuario);
})
