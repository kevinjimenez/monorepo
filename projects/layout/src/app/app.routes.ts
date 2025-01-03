import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadComponent: () => import('./app.component').then((m) => m.AppComponent),
  // },
  {
    path: 'db-characters',
    loadChildren: () =>
      loadRemoteModule('characters', './routes').then((m) => m.routes),
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
  // {
  //   path: '**',
  //   redirectTo: 'not-found',
  //   pathMatch: 'full',
  // },
];
