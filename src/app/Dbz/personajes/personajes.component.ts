import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  // TODO : Esta Recibiendo la lista de los personajes desde el lugar que se le llama
  // @Input('data') personajes: Personaje[]= []

  // TODO : SE RECIBE LA NUEVA LISTA DEL SERVICIO INJECTADO AL MOMENTO DE LLAMAR A ESTE "GET"
    get personajes():Personaje[]{
      return this.dbzService.personajes
    }

    constructor(private dbzService:DbzService) {}
}
