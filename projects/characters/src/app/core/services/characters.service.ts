import { Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getCharacters } from '../actions';
import { getCharacterById } from '../actions/get-character-by-id.action';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private id = signal<string | null>(null);

  charactersQuery = injectQuery(() => ({
    queryKey: ['characters'],
    queryFn: () => getCharacters(),
  }));

  characterByIdQuery = injectQuery(() => ({
    queryKey: ['character', this.id()],
    queryFn: () => getCharacterById(this.id()!),
    enabled: () => this.id() !== null,
  }));

  set characterId(id: string) {
    this.id.set(id);
  }
}
