import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Cristian';
  genero: string = 'femenino';

  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };
  //i18nPlural
  clientes: string[] = ['pepe', 'pancha', 'poncho'];
  clientesMap = {
    '=0': 'Actualmente no hay ninguno cliente esperando',
    '=1': 'Actualmente hay un cliente esperando',
    other: 'Actualmente hay # clientes esperando',
  };

  cambiarCliente() {
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValue
  persona = {
    nombre: 'fernando',
    edad: 35,
    direccion: 'mexico',
  };

  //Json
  heroes = [
    {
      nombre: 'batamn',
      vuela: false,
    },
    {
      nombre: 'superman',
      vuela: true,
    },
    {
      nombre: 'Pace Maker',
      vuela: false,
    },
  ];

  //Asyn

  myObesvable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa');
    }, 3500);
  });
}
