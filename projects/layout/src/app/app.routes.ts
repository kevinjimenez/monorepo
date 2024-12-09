import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: 'app-characters',
  //   loadComponent: () =>
  //     loadRemoteModule('characters', './Component').then((m) => m.AppComponent),
  // },
  // {
  //   path: 'app-characters',
  //   loadChildren: () =>
  //     loadRemoteModule('characters', './routes').then((m) => m.routes),
  // },
  {
    path: '',
    loadChildren: () =>
      loadRemoteModule('characters', './routes').then((m) => m.routes),
  },
];
