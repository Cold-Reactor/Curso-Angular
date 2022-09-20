import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {
  //!SE INJECTA EL SERVICIO
  constructor(private dbzService:DbzService) {}

  //TODO: injecta la lista de pesonajes del main para que se modificar desde aqui
  // @Input('data') personajes:Personaje[]=[]

//TODO: Se crea el pesonaje con los outputs
nuevo: Personaje = {
    nombre:"",
    poder: 0
}

//TODO: Sale el OBJETO "nuevoPersonaje: Personaje" a la clase padre AL MOMENTO DE QUE ESTA SE "emit"
// @Output() nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter()

agregar(){
  if (this.nuevo.nombre.trim().length === 0){
    return
  }
  
  this.dbzService.agregarPersonajes(this.nuevo) //!SE LLAMA AL METODO Y SE LE DA UN NUEVO PERSONAJE

  //this.nuevoPersonaje.emit(this.nuevo) //!AQUI SE ESTA emitiendo (El valor del objeto que se emitira a la clase padre se pone como parametro AQUI)
  
  console.log(this.nuevo)
  this.nuevo = { 
    nombre:"",
    poder: 0
  }
}

}
