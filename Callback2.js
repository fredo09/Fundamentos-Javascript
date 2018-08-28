/**
* Problemas con callbacks
*/

let Empleados = [{
  id:1,
  Nombre: 'Alfredo'
},{
  id:2,
  Nombre: 'Jose'
},{
  id:3,
  nombre: 'juan'
}];

let Salario = [{
  id: 1,
  salario: 1000
},{
  id:2,
  salario: 2000
}];

let getEmpleados = (id, callback) =>{
  let EmpleadoBD = Empleados.find(Empleados => Empleados.id === id)
  //console.log(EmpleadoBD);

  if(!EmpleadoBD){
    console.log(`No existe ese usuario con id: ${id}`);
  }else{
    callback(null, EmpleadoBD);
  }
}

let getSalarios = (Empleados, callback) => {
    let SalarioBD = Salario.find(salario => salario.id === Empleados.id)

    if(!SalarioBD){
      console.log(`No existe este salario para el empleado ${Empleados.Nombre}`);
    }else{
      callback(null,{
        salario: SalarioBD.salario,
        nombre: Empleados.Nombre,
        id:Empleados.id
      })
    }
}


getEmpleados(2, (err,Empleados) => {
  if(err){
    return console.log(err);
  }

  //Obteniendo el salario

  getSalarios(Empleados,(err, resp) => {
    if(err){
      return console.log(err);
    }

    console.log(`El salario es ${resp.salario} para ${resp.nombre}`);
  })
});
