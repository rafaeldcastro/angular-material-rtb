import { Routes, RouterModule } from '@angular/router';
import { authPagesRoutesNames } from './auth-pages-routes-names';

import { AuthPagesComponent } from './auth-pages.component';

import { RecoverPasswordPageComponent } from './recover-password/recover.component';
import { SignupPageComponent } from './signup/signup.component';
import { LoginPageComponent } from './login/login.component';

const authPagesRoutes: Routes = [
  {
    path: '',
    component: AuthPagesComponent,
    children: [
      {
        path: '',
        redirectTo: authPagesRoutesNames.LOGIN.route,
        pathMatch: 'full'
      },
      {
        path: authPagesRoutesNames.LOGIN.route,
        component: LoginPageComponent
      },
      {
        path: authPagesRoutesNames.SIGNUP.route,
        component: SignupPageComponent
      },
      {
        path: authPagesRoutesNames.RECOVER_PASSWORD.route,
        component: RecoverPasswordPageComponent
      }
    ]
  }
];

export const AUTH_PAGES_ROUTES = RouterModule.forChild(authPagesRoutes);