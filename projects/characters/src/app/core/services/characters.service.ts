import { Injectable } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getCharacters } from '../actions';
import { getCharacterById } from '../actions/get-character-by-id.action';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  charactersQuery = injectQuery(() => ({
    queryKey: ['characters'],
    queryFn: () => getCharacters(),
  }));

  characterByIdQuery = injectQuery(() => ({
    queryKey: ['character'],
    queryFn: () => getCharacterById(),
  }));
}
