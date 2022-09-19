import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['antman','monknight','flash']
  heroeBorrado: string= ''

  get borrarHeroe():string{
    this.heroeBorrado = this.heroes.pop() || ''
    return this.heroeBorrado 
  }
}
