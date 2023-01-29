import { Component, OnInit } from '@angular/core';
import { PokemonResultI } from 'src/app/pages/interface';
import { PokeAPIService } from 'src/app/service/poke-api.service'

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public getAllPokemons: PokemonResultI[] = [];
  private setAllPokemons: PokemonResultI[] = [];
  public apiError: boolean = false;

  constructor(private pokeAPIService: PokeAPIService) {}

  ngOnInit(): void {
    // Para inicializar o get, é necessário instanciar
    this.pokeAPIService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons
      console.log(this.getAllPokemons)
      },
      error => {
        this.apiError = true;
      }
    );
  }

  public getSearch(search: string) {
    console.log(search);
    const filteredPokemon = this.setAllPokemons.filter((infosPokemon) => {
      return !infosPokemon.name.indexOf(search.toLowerCase());
    })
    // Aqui é a forma ideal do filtro apagar e ser reatribuído com os valores digitados/apagados
    this.getAllPokemons = filteredPokemon;
  }
}
