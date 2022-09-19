import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
  })
export class HeroeComponent {

    nombre: string = 'spider'
    edad: number = 22

    //!Se utiliza cuando queremos regresar valores
    get nombreCapitalizado(): string{
      return this.nombre.toLocaleUpperCase()
    }

    //!Se utilizan cuando queremos que se ejecute una funcion
    obtenerNombre(): string{
      return `${this.nombre} - ${this.edad}`
    }

    cambiarNombre():void{
      this.nombre= 'batman'
    }

    cambiarEdad():void{
      this.edad= 30
    }
}