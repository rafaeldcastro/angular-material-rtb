import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { appRoutesNames } from './app-routes-names';

import { PageNotFoundComponent } from './pages/_page-not-found/page-not-found.component';

/**GUARDS */
import { AuthCanActivateGuard } from './shared/services/_guards/can-activate/auth.can-activate.guard';
import { AuthCanLoadGuard } from './shared/services/_guards/can-load/auth.can-load.guard';

const appRoutes: Routes = [
  {
    path: appRoutesNames.AUTH.route,
    loadChildren: () => import('./pages/_auth/auth-pages.module').then(m => m.AuthPagesModule),
    canActivate: [ AuthCanActivateGuard ] //TODO Só entra se nao tiver logado
  },
  {
    path: appRoutesNames.PAGES.route,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canLoad: [ AuthCanLoadGuard ],
    canActivate: [ AuthCanActivateGuard ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: appRoutesNames.AUTH.route
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