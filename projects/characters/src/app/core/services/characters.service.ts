import { Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getCharacters, getCharactersByPage } from '../actions';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private page = signal<number>(1);

  charactersQuery = injectQuery(() => ({
    queryKey: ['characters'],
    queryFn: () => getCharacters(),
  }));

  charactersByPageQuery = injectQuery(() => ({
    queryKey: ['characters', this.page()],
    queryFn: () => getCharactersByPage(this.page()),
    enabled: () => this.page() !== null,
  }));

  public setPage(newPage: number) {
    console.log({ newPage });
    this.page.set(newPage);
  }

  public getPage() {
    return this.page();
  }
}
