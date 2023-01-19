import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
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
  public serachPokemon(searchString: string): Observable<Pokemon[]> {
    if (!searchString.trim()) {
      return of([]);
    }
    return this.http.get<Pokemon[]>(`${this.api_url}/?name=${searchString}`);
  }

  constructor(private http: HttpClient) {}
}
