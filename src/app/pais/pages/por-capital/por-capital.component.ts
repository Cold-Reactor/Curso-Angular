import { Component} from '@angular/core';
import { PorPais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{
  termino: string = '';
  error: boolean = false;
  capitales:PorPais[] = []; //

  constructor(private service: PaisService) {}

  buscar(termino: string) {
    this.termino = termino;

    this.service.buscarCapital(termino)
    .subscribe(resp => {
      this.error = false
      this.capitales = resp
      console.log(resp,"dasdasdasda");
      
    }, (err) =>{
      this.error = true
      this.capitales = []
    });
  }

}
