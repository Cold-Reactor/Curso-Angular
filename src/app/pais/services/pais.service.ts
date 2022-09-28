import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { PorPais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiUrl2: string = 'https://restcountries.com/v2';


  constructor(private httpClient: HttpClient) {}

  buscarPais(termino: string): Observable<PorPais[]> {
    const url = `${this.apiUrl}/name/${termino}`;

    // TODO: "OF" es una funcion que gera obserbables, aqui se esta utilizando encaso de que la peticion htt reciba un error retorna un []
    // return this.httpClient.get(url).pipe(catchError((err) => of([])));
    return this.httpClient.get<PorPais[]>(url);
  }
  buscarCapital(termino: string): Observable<PorPais[]> {
    const url = `${this.apiUrl}/capital/${termino}`;

    return this.httpClient.get<PorPais[]>(url);
  }

  verPais(id: string): Observable<PorPais[]> {
    const url = `${this.apiUrl}/alpha/${id}`;

    return this.httpClient.get<PorPais[]>(url);
  }

  regional(id: string): Observable<PorPais[]> {

    // const params = new HttpParams()
    //   .set('fields', 'name,capital,flag,population,alpha2Code' )
    
    const url = `${this.apiUrl2}/regionalbloc/${id}`;

    // return this.httpClient.get<PorPais[]>(url, {params}).pipe(tap(console.log))
    return this.httpClient.get<PorPais[]>(url).pipe(tap(console.log))

  }
}
