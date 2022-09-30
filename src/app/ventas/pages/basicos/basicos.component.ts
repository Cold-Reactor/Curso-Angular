import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'cristian';
  nombreUper: string = 'CRISTIAN';
  nombreCompleto: string = 'CRIstIaN';

  fecha: Date = new Date()
}
