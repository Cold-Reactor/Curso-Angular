import { NgModule } from "@angular/core";
import { ContadorComponent } from './conta/contador.component';

 @NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ],
    imports:[]
 })
 export class ContadorModule{}