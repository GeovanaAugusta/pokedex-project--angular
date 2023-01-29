import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {

  // O que for digitado deve ser emitido pra outros componentes, facilitando a buca
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {

  }

  public search(search: string) {
    this.emmitSearch.emit(search);
    // console.log(search);
  }

}
