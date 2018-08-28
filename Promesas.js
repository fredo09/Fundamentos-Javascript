/**
* Promesas
*/
let Empleados = [{
  id:1,
  Nombre: 'Alfredo'
},{
  id:2,
  Nombre: 'Jose'
},{
  id:3,
  Nombre: 'juan'
}];

let Salario = [{
  id: 1,
  salario: 1000
},{
  id:2,
  salario: 2000
}];

let getEmpleados = (id) =>{

  return new Promise ((resolve, reject) => {
    let EmpleadoBD = Empleados.find(Empleados => Empleados.id === id)
    //console.log(EmpleadoBD);
    if(!EmpleadoBD){
      reject(`No existe ese usuario con id: ${id}`); //Algun error
    }else{
      resolve(EmpleadoBD); //exitoso
    }
  });
}

let getSalarios = (Empleados) => {
  return new Promise((resolve, reject) => {
    let SalarioBD = Salario.find(salario => salario.id === Empleados.id)

    if(!SalarioBD){
      reject(`No existe este salario para el empleado ${Empleados.Nombre}`);
    }else{
      resolve({
        salario: SalarioBD.salario,
        nombre: Empleados.Nombre,
        id:Empleados.id
      })
    }
  });
}

// getEmpleados(3).then(Empleados =>{
//   console.log(Empleados);
//   getSalarios(Empleados).then(resp => {
//     console.log(`El salario es ${resp.salario} para ${resp.nombre}`);
//   }, (err) => console.log(err))
// }, (err) => console.log(err)
// )

getEmpleados(10).then(Empleados => {
  return getSalarios(Empleados);
}).then(resp => {
  console.log(`El salario es ${resp.salario} para ${resp.nombre}`);
}).catch(err => {
  console.log(err);
})
