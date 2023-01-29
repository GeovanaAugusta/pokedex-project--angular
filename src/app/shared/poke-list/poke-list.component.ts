import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from 'src/app/service/poke-api.service'

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  constructor(private pokeAPIService: PokeAPIService) {}

  ngOnInit(): void {
    // Para inicializar o get, é necessário instanciar
    this.pokeAPIService.apiListAllPokemons.subscribe(
      res => console.log(res)
    );
  }
}
