import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PorPais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
      a {
        cursor: pointer;
      }
    `,
  ],
})
export class SugerenciasComponent {
  //TODO:Recibe Los paises Sugeridos con respecto a lo que se tecla en el modulo de INPUT
  @Input() paisesSugeridos: PorPais[] = [];
  //TODO: Recibe el termino de la clase en la que lo llaman
  @Input() termino: string = '';
  //TODO: Transmite el termino a buscar cuando se selecciona el enlace de busqueda en la caja de sugerencias
  @Output() ter: EventEmitter<string> = new EventEmitter();

  buscar(ter: string) {
    this.ter.emit(ter);
  }
}
