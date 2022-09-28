import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  //TODO: emiten los valores ingresados a las clases que lo llaman
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  //TODO: Recive el placeholder de la clase que lo llama
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit() {
    //TODO: Cada que se teclea una tecla entrea este metodo y hasta que se deje de escribir espera 300 milesimas de segundos para que se ejecute el suscribe
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }
  //TODO: Cuando se presiona enter en el imput entra este metodo el cual emite el termino a buscar a la clase que lo esta llamando
  buscar() {
    this.onEnter.emit(this.termino);
  }
  //TODO: Cuando se deja de escribir el terminino ingresado entra en un objeto para que posteriormente este tenga un valor para suscibirse y emitr el valor a la clase que lo esta llamando
  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
}
