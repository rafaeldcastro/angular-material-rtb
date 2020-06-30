import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { appRoutesNames } from './app-routes-names';

import { PageNotFoundComponent } from './pages/_page-not-found/page-not-found.component';

/**GUARDS */


const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { 
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled' 
});