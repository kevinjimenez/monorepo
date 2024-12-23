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
    return this.charactersService.charactersByPageQuery;
  }

  public prevPage() {
    // Obtener desde las query params
    const newPage = this.charactersService.getPage() - 1;
    console.log({ newPage });

    if (newPage > 0) this.charactersService.setPage(newPage);
  }

  public nextPage() {
    console.log('next');

    // Obtener desde las query params
    const newPage = this.charactersService.getPage() + 1;
    this.charactersService.setPage(newPage);
  }
}
