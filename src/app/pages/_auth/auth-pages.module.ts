import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AUTH_PAGES_ROUTES } from './auth-pages-routes';

import { AuthPagesComponent } from './auth-pages.component';

@NgModule({
  declarations: [
    AuthPagesComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    AUTH_PAGES_ROUTES,
  ],
  exports: [
    AuthPagesComponent,
  ]
})
export class AuthPagesModule { }
