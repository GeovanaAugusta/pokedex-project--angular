import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100'

  constructor(private http: HttpClient) { }


  public get apiListAllPokemons() : Observable<any> {
    // O pipe age como um filtro no http
    return this.http.get<any>(this.url).pipe(
      // O tap faz uma outra requisição
      tap(res => res),
      tap(res => {
        console.log(res);

      })
    );
  }

}
