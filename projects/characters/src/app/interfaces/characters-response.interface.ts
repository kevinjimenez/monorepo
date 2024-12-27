import { CharacterResponse } from './character-response.interface';
import { DefaultResponse } from './default-response.interface';

export interface CharactersResponse extends DefaultResponse<Character> {}

export interface Character
  extends Omit<CharacterResponse, 'originPlanet' | 'transformations'> {}
