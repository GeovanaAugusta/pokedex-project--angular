import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PokemonDetailsI, PokemonResultI } from '../pages/interface';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100'

  constructor(private http: HttpClient) { }


  public get apiListAllPokemons() : Observable<PokemonResultI> {
    // O pipe age como um filtro no http
      return this.http.get<PokemonResultI>(this.url).pipe(
      // O tap faz uma outra requisição por exemplo, passa a resposta e dá sequência para o próximo passo a ser executado
      tap( res => res ),
      tap( res => {
        res.results.map( (resPokemons: PokemonResultI) => {
          // A API pura passa apenas o name e url, a partir dessa url é que consigo ver os seus detalhes, seus status
          this.apiGetPokemon(resPokemons.url).subscribe(
            res => resPokemons.status = res
          );
        })
      })
    )
  }

  public apiGetPokemon( url: string ):Observable<PokemonDetailsI>{
    return this.http.get<PokemonDetailsI>( url ).pipe(
      map(
        res => res
      )
    )
  }
}
