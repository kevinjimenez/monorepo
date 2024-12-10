import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BadgeComponent } from '../../shared/components/badge/badge.component';

@Component({
  selector: 'app-dragon-ball-page',
  imports: [RouterOutlet, RouterLink, BadgeComponent],
  templateUrl: './dragon-ball-page.component.html',
})
export class DragonBallPageComponent {}
