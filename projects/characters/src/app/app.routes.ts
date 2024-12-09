import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'db',
    loadComponent: () =>
      import('./pages/dragon-ball/dragon-ball-page.component').then(
        (c) => c.DragonBallPageComponent
      ),
    children: [
      {
        path: 'personajes',
        loadComponent: () =>
          import(
            './pages/dragon-ball/components/personajes/personajes.component'
          ),
      },
      {
        path: 'personajes/:id',
        loadComponent: () =>
          import(
            './pages/dragon-ball/components/personaje-item/personaje-item.component'
          ),
      },
      {
        path: 'planetas',
        loadComponent: () =>
          import('./pages/dragon-ball/components/planetas/planetas.component'),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'db',
    pathMatch: 'full',
  },
];
