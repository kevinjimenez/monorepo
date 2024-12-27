import { Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getCharactersByPage } from '../actions';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private page = signal<number>(1);

  charactersByPageQuery = injectQuery(() => ({
    queryKey: ['characters', this.page()],
    queryFn: () => getCharactersByPage(this.page()),
    enabled: () => this.page() !== null,
  }));

  public setPage(newPage: number) {
    this.page.set(newPage);
  }

  public getPage() {
    return this.page();
  }
}
