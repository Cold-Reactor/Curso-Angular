import { Component } from '@angular/core';
import { PorPais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  termino: string = '';
  error: boolean = false;
  capitales: PorPais[] = [];

  paisesSugeridos: PorPais[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private service: PaisService) {}

  buscar(termino: string) {
    this.termino = termino;
    this.mostrarSugerencias = false;
    this.service.buscarCapital(termino).subscribe(
      (resp) => {
        this.error = false;
        this.capitales = resp;
        console.log(resp, 'dasdasdasda');
      },
      (err) => {
        this.error = true;
        this.capitales = [];
      }
    );
  }
  sugerencias(termino: string) {
    if (termino != '') {
      this.error = false;
      this.termino = termino;
      this.mostrarSugerencias = true;

      this.service.buscarCapital(termino).subscribe(
        (pais) => (this.paisesSugeridos = pais.splice(0, 5)),
        (err) => (this.paisesSugeridos = [])
      );
    }
    else{
      this.mostrarSugerencias = false;
    }
  }
}
