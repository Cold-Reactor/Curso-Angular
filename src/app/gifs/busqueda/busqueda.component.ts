import { Component, ElementRef, ViewChild } from '@angular/core';
import { find } from 'rxjs';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {

  constructor(private gifService: GifsService) {
    
  }

  //TODO: De esta manera se puede manipular los elementos HTML
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>

  buscar(){
    const valor = this.txtBuscar.nativeElement.value

    this.gifService.buscarGifs(valor)

    this.txtBuscar.nativeElement.value=""
    

  }
}
