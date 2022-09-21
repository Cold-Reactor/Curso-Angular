import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _apiKey: string = 'OcBOKijp26cgi3tjYPnPfa04HAwqXzYg';
  private _historial: string[] = [];
  resultados: any[]=[]

  constructor(private http: HttpClient) {}

  get historial() {
    return [...this._historial];
  }

  buscarGifs(quey: string) {
    quey = quey.trim().toLocaleLowerCase();

    if (quey.trim().length == 0) {
      //TODO: si el QUERY esta vacio no hagas nada
      return;
    }

    if (!this._historial.includes(quey)) {
      //TODO: Si el query no se encuentra en la lista ejecuta las secuencias
      this._historial.unshift(quey); //TODO: insertar al inicio del arreglo
      this._historial = this._historial.splice(0, 10); //TODO: Solo dame los primeros 10
    }
    //! OBSERVABLE

    this.http
      .get<any>(
        `https://api.giphy.com/v1/gifs/search?api_key=${this._apiKey}&q=${quey}&limit=10`
      )
      .subscribe((resp: any) => {
        console.log(resp.data);
        this.resultados = resp.data;
      });

    //! PROMESAS

    // fetch(
    //   'https://api.giphy.com/v1/gifs/search?api_key=OcBOKijp26cgi3tjYPnPfa04HAwqXzYg&q=dragon ball z'
    // ).then((resp) => {
    //   resp.json().then((data) => console.log(data));
    // })

    // const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=OcBOKijp26cgi3tjYPnPfa04HAwqXzYg&q=dragon ball z')
    // const data = await resp.json()
    // console.log(data)
  }
}
