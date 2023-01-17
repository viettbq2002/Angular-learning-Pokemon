import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Pokemon } from '../interface/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  private api_url: string =
    'https://63c5044bf3a73b34784bf392.mockapi.io/api/v1/Pokemon';
  private HttpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  public getPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.api_url, this.HttpOptions);
  }

  constructor(private http: HttpClient) {}
}
