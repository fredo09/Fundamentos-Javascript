/**
 * Resolviendo Problemas con Async-Await
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

 //Usando Async sustituyendo a las promesas tradicional
 let getEmpleados = async (id) =>{

     let EmpleadoBD = Empleados.find(Empleados => Empleados.id === id)
     //console.log(EmpleadoBD);
     if(!EmpleadoBD){
       throw new Error(`No existe ese usuario con id: ${id}`); //Algun error
     }else{
       return EmpleadoBD; //exitoso
     }

 }

 let getSalarios = async (Empleados) => {

     let SalarioBD = Salario.find(salario => salario.id === Empleados.id)

     if(!SalarioBD){
       throw new Error(`No existe este salario para el empleado ${Empleados.Nombre}`);
     }else{
       return {
         salario: SalarioBD.salario,
         nombre: Empleados.Nombre,
         id:Empleados.id
       }
     }

 }

 let getInfo = async(id) => {
   let empleado = await getEmpleados(id);
   let salario = await getSalarios(empleado);
   return `El salario es ${salario.salario} para ${salario.nombre}`;
 }

//Se maneja con then y error
getInfo(2).then(message => {
  console.log(message);
}).catch(e =>{
  console.log(e);
});
