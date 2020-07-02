import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** MODULES */
import { RouterModule } from '@angular/router';

/** COMPONENTS */
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {}
