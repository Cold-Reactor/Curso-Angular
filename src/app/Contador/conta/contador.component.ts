import {Component} from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>
    <button (click)="sumar(base)">+{{base}} </button>
    <span>{{numero}}</span>
    <button (click)=" numero = numero - 1">-1</button>
  `
})

export class ContadorComponent {
title = 'primero';
numero: number = 0
base: number = 5

sumar( valor: number){
    this.numero +=valor
}
}
