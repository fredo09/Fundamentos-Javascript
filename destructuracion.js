let Spiderman = {
  Nombre: 'Peter',
  Apellido: 'Parker',
  Poder: 'Trepar como araña',
  getNombre : function(){
    return `${this.Nombre} ${this.Apellido} tiene el porder de ${this.Poder}`
  }
}

console.log(Spiderman.getNombre());

//Destructuracion Ejemplo

let {Nombre:Nom, Apellido, Poder } = Spiderman;

console.log(Nom, Apellido, Poder);
