import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** MODULES */
import { RouterModule } from '@angular/router';

/** COMPONENTS */
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PageNotFoundComponent
      }
    ])
  ],
  exports: [
    PageNotFoundComponent
  ]
})
export class PageNotFoundModule {}
