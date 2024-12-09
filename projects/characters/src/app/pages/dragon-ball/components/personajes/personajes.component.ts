import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CharactersService } from '../../../../core/services/characters.service';

@Component({
  selector: 'app-personajes',
  imports: [RouterLink],
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export default class PersonajesComponent {
  public charactersService = inject(CharactersService);

  get charactersQuery() {
    return this.charactersService.charactersQuery;
  }
}
