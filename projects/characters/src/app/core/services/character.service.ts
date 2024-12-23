import { Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getCharacterById } from '../actions';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private id = signal<string | null>(null);

  characterByIdQuery = injectQuery(() => ({
    queryKey: ['character', this.id()],
    queryFn: () => getCharacterById(this.id()!),
    enabled: () => this.id() !== null,
  }));

  public setCharacterId(id: string) {
    console.log(id);

    this.id.set(id);
  }
}
