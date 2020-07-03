import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { appRoutesNames } from './app-routes-names';

/**GUARDS */
import { AuthCanActivateGuard } from './shared/services/_guards/can-activate/auth.can-activate.guard';

const appRoutes: Routes = [
  {
    path: appRoutesNames.LOGIN.route,
    loadChildren: () => import('./pages/_auth/login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: appRoutesNames.SIGNUP.route,
    loadChildren: () => import('./pages/_auth/signup/signup.module').then(m => m.SignupPageModule),
  },
  {
    path: appRoutesNames.RECOVER_PASSWORD.route,
    loadChildren: () => import('./pages/_auth/recover-password/recover.module').then(m => m.RecoverPasswordPageModule),
  },
  {
    path: appRoutesNames.HOME.route,
    loadChildren: () => import('./pages/main/home/home.module').then(m => m.HomeModule),
    canActivate: [ AuthCanActivateGuard ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: appRoutesNames.LOGIN.route
  },
  {
    path: '**',
    loadChildren: () => import('./pages/_page-not-found/page-not-fount.module').then(m => m.PageNotFoundModule),
  }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { 
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled' 
});