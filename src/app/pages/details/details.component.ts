import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { PokeAPIService } from 'src/app/service/poke-api.service';
import { PokemonDetailsI } from '../interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: PokemonDetailsI[] = [];
  public isLoading: boolean = false;
  public apiError: boolean = false;

  // Pegar o ID presente na URL
  constructor(private activatedRoute: ActivatedRoute,
    private pokeAPIService: PokeAPIService) {}

  ngOnInit(): void {
    this.getPokemon;
  }

  public get getPokemon() {
    const id = this.activatedRoute.snapshot.params['id'];
    // Pegar as informações do Pokemon com o id acima
    const pokemon = this.pokeAPIService.apiGetPokemon(`${this.urlPokemon}/${id}`);
    const name = this.pokeAPIService.apiGetPokemon(`${this.urlName}/${id}`);

    // Faz duas buscas, dispensando o uso de subscribes
    // O forkJoin que usava a mesma estrutura abaixo, foi substituído pelo combineLatest
   return combineLatest([pokemon, name]).subscribe(
      res => {
        this.pokemon = res;
        // Verificação se carregou ou não
        this.isLoading = true;
        console.log(res);
      },
      error => {
        this.apiError = true;
      }
    );
  }

}

