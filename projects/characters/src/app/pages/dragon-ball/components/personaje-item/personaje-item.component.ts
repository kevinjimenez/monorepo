import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { CharactersService } from '../../../../core/services/characters.service';

@Component({
  selector: 'app-personaje-item',
  imports: [],
  templateUrl: './personaje-item.component.html',
})
export default class PersonajeItemComponent {
  public activatedRoute = inject(ActivatedRoute);
  public charactersService = inject(CharactersService);

  characterId = toSignal<string>(
    this.activatedRoute.paramMap.pipe(
      map((params) => params.get('id') ?? ''),
      tap((number) => {
        console.log({ number });
        this.charactersService.characterId = number;
      })
    )
  );

  get characterByIdQuery() {
    return this.charactersService.characterByIdQuery;
  }
}
