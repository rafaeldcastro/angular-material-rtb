import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MAIN_ROUTES } from './main-routes';

/** MODULES */
import { MainComponentsModule } from './shared/components/components.module';
import { SharedModule } from '@shared/shared.module';

/** COMPONENTS */
import { MainPagesComponent } from './main.component';

@NgModule({
  declarations: [
    MainPagesComponent,
  ],
  imports: [
    CommonModule,
    MAIN_ROUTES,
    SharedModule,
    MainComponentsModule
  ],
  exports: [
    MainPagesComponent
  ]
})
export class MainPagesModule {}
