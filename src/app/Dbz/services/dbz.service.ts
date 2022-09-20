import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

//*MODELO
//*LISTA DE OBJETOS DE ESE MODELO
//!METODOS
//*OBTENER
//*AGREGAR
//? ELIMINAR

@Injectable()
export class DbzService {

    private _personajes: Personaje[]= [
    {
      nombre: "goku",
      poder: 15000,

    },
    {
      nombre: "vegeta",
      poder: 14000,

    },
  ]

    //TODO: LO QUE HACE ES DAR UNA LISTA NUEVO CON LOS VALORES UNA LA LISTA DE ESTA CLASE, LA CUAL SE ESTA ESPECIFICANDO 
    get personajes(): Personaje[]{
    return [...this._personajes]
    }

    //TODO: RECIBE COMO PARAMETRO UN PERSONAJE AL MOMENTO DE SER LLAMADA DESDE UNA CLASE EN LA QUE SE INJECTO ESTE SERVICIO
    agregarPersonajes(personaje: Personaje){
        this._personajes.push(personaje) //! AGREGA UN NUEVO PERSONAJE A LA LISTRA QUE SE ESTA MOSTRANDO EN LA CLKASE "MAINPAGE"
    }
}