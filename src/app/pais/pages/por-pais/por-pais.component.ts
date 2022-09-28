import { Component } from '@angular/core';
import { PorPais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = '';
  error: boolean = false;
  paises: PorPais[] = [];

  paisesSugeridos: PorPais[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private service: PaisService) {}

  buscar(termino: string) {
    this.termino = termino;
    this.mostrarSugerencias = false;

    this.service.buscarPais(termino).subscribe(
      (resp) => {
        this.error = false;
        this.paises = resp;
        console.log(resp);
      },
      (err) => {
        this.error = true;
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {
    if (termino != '') {
      this.error = false;
      this.termino = termino;
      this.mostrarSugerencias = true;

      this.service.buscarPais(termino).subscribe(
        (pais) => (this.paisesSugeridos = pais.splice(0, 5)),
        (err) => (this.paisesSugeridos = [])
      );
    } else {
      this.mostrarSugerencias = false;
    }
  }
}
