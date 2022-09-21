import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _apiKey: string = 'OcBOKijp26cgi3tjYPnPfa04HAwqXzYg';
  private _serviceUrl: string = 'https://api.giphy.com/v1/gifs'
  private _historial: string[] = [];
  resultados: Gif[] = [];

  constructor(private http: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || []; //TODO: almacena el arreglo en _historial
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || []; //TODO: almacena el resultados en _resultados


    // if(localStorage.getItem('historial')){ //TODO: Si el historial existe
    //   this._historial = JSON.parse(localStorage.getItem('historial')!); //TODO: almacena el arreglo en _historial
    //}
  }

  get historial() {
    return [...this._historial];
  }

  buscarGifs(quey: string) {
    quey = quey.trim().toLocaleLowerCase();

    if (quey.trim().length == 0) { //TODO: si el QUERY esta vacio no hagas nada
      return;
    }

    if (!this._historial.includes(quey)) {//TODO: Si el query no se encuentra en la lista ejecuta las secuencias
      this._historial.unshift(quey); //TODO: insertar al inicio del arreglo
      this._historial = this._historial.splice(0, 10); //TODO: Solo dame los primeros 10

      localStorage.setItem('historial', JSON.stringify(this._historial)) //TODO: Guarda en cache del navegador el _historial con el nombre de 'historial'
    }
    //! OBSERVABLE

    const params = new HttpParams().set('api_key', this._apiKey).set('limit', '10').set('q',quey);

    this.http
      .get<SearchGifsResponse>(
        `${this._serviceUrl}/search`,{params}
      )
      .subscribe((resp: SearchGifsResponse) => {
        this.resultados = resp.data;
        // resp.data[0].images.downsized_medium.url
        localStorage.setItem('resultados', JSON.stringify( this.resultados )) //TODO: guarda en cache del navegador el resultados con el nombre de 'resultados'

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
