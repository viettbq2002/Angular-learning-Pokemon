import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../service/pokemon-api.service';
import { Pokemon } from '../interface/pokemon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  pokemons: Pokemon[] = [];
  constructor(private pokemonApi: PokemonApiService) {}
  public ngOnInit(): void {
    this.getPokemons();
  }
  getPokemons() {
    this.pokemonApi
      .getPokemon()
      .subscribe((pokemons) => (this.pokemons = pokemons));
  }
}
