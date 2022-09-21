import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  template:`
  <styles>
  </styles>
  `
})
export class SidebarComponent{

  constructor(private gifService:GifsService) { }

  get historial(){
    return this.gifService.historial
  }

  buscar(res:string){
    this.gifService.buscarGifs(res)
  }
}
