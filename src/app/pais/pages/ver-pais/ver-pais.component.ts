import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PorPais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: PorPais;

  constructor(private route: ActivatedRoute, private service: PaisService) {}

  ngOnInit(): void {
    //TODO: se obtiene primero el di de la ruta para despues pasarselo al servicio y sucribirse a lo obtenido
    this.route.params
      .pipe(
        switchMap(({ id }) => this.service.verPais(id)),
        tap(console.log)
      )
      .subscribe((pais) => this.pais = pais[0]);
      this.pais.translations

    // this.route.params.subscribe(({ id }) => {
    //   console.log(id);
    //   this.service.verPais(id).subscribe((pais) => {
    //     this.pais = pais;
    //     console.log(this.pais.name.common);
    //   });
    // });
  }
}
