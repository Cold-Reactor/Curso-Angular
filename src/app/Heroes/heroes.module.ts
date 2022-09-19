import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

 @NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        HeroeComponent,
        ListadoComponent
    ],
    imports:[
        CommonModule //!ES PARA PODER UTILIZAR LOS @NG EN EL HTML
    ]
 })
 export class HeroesModule{}