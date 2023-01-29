import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeAPIService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  // Pegar o ID presente na URL
  constructor(private activatedRoute: ActivatedRoute,
    private pokeAPIService: PokeAPIService) {}

  ngOnInit(): void {
    this.pokemon;
  }

  get pokemon() {
    const id = this.activatedRoute.snapshot.params['id'];
    // Pegar as informações do Pokemon com o id acima
    const pokemon = this.pokeAPIService.apiGetPokemon(`${this.urlPokemon}/${id}`);
    const name = this.pokeAPIService.apiGetPokemon(`${this.urlName}/${id}`);

    // Faz duas buscas, dispensando o uso de subscribes
   return forkJoin([pokemon, name]).subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
