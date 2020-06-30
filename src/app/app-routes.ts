import { Routes, RouterModule } from '@angular/router';
import { appRoutesNames } from './app-routes-names';

/**GUARDS */


const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: '**',
    loadChildren: () => import('./pages/_page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
  }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { scrollPositionRestoration: 'enabled' });