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


  constructor(private service: PaisService) {}

  activarRegion(region: string) {
    //TODO: Si la region es giaul a la region que sta activa, no mandes a llamar el endpoint
    if(region === this.regionActiva ){return}
    this.regionActiva = region;

    this.service.regional(region).subscribe(paises => this.paises = paises)
  }
}
