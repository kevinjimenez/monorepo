import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CharactersService } from '../../../../core/services/characters.service';
import { LoadingComponent } from '../../../../shared/components/loading/loading.component';

@Component({
  selector: 'app-personajes',
  imports: [RouterLink, LoadingComponent],
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export default class PersonajesComponent {
  public charactersService = inject(CharactersService);
  get charactersQuery() {
    return this.charactersService.charactersByPageQuery;
  }

  public prevPage(): void {
    // Obtener desde las query params
    const newPage = this.charactersService.getPage() - 1;
    if (newPage <= 0) return;

    this.charactersService.setPage(newPage);
  }

  public nextPage(): void {
    const totalPages =
      this.charactersService.charactersByPageQuery.data()?.meta.totalPages;

    // Obtener desde las query params
    if (totalPages === this.charactersService.getPage()) return;
    const newPage = this.charactersService.getPage() + 1;
    this.charactersService.setPage(newPage);
  }
}
