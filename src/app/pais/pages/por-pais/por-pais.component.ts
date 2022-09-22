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
  paises:PorPais[] = []; //

  constructor(private service: PaisService) {}

  buscar() {
    console.log(this.termino);

    this.service.buscarPais(this.termino)
    .subscribe(resp => {
      this.error = false
      this.paises = resp
      console.log(resp);
      
    }, (err) =>{
      this.error = true
      this.paises = []
    });
  }
}
