import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {

  //TODO: De esta manera se puede manipular los elementos HTML
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>

  buscar(){
    console.log(this.txtBuscar.nativeElement.value)
    this.txtBuscar.nativeElement.value=""

  }
}
