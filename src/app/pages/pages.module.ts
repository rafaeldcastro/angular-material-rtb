import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PAGES_ROUTES } from './pages-routes';

import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    RouterModule,
    PAGES_ROUTES,
    CommonModule,
  ],
  exports: [
    PagesComponent,
  ]
})
export class PagesModule { }
