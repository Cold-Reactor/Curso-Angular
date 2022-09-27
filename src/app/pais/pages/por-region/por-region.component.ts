import { Component} from '@angular/core';
import { PorPais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button {margin-right: 5px;}`
  ]
})
export class PorRegionComponent{

  regiones: string[] = ['PA', 'AU', 'USAN', 'EEU', 'AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC','EU','EFTA','CARICOM'];
  regionActiva: string = ''
  paises: PorPais[] = []


  // constructor(private service: PaisService) {}

  // buscar(termino: string) {
  //   this.termino = termino;

  //   this.service.buscarCapital(termino)
  //   .subscribe(resp => {
  //     this.error = false
  //     this.capitales = resp
  //     console.log(resp,"dasdasdasda");
      
  //   }, (err) =>{
  //     this.error = true
  //     this.capitales = []
  //   });
  // }

  activarRegion(region: string) {
    this.regionActiva = region;
  }
}
