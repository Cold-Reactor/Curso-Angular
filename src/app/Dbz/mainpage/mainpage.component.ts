import { Component, Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent{


  // TODO: Es como crear un objeto de lista de personajes
  // get personajes(): Personaje[]{
  //   return this.dbzService.personajes
  // }

  // agregarNuevoPersonaje(evento:Personaje){
  //   this.personajes.push(evento)
  // }

  // TODO: INJECTANDO EL SERVICIO
  // constructor(private dbzService:DbzService) {

  // }
}
