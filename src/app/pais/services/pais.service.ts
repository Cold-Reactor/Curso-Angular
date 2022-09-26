import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PorPais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

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
}
