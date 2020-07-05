import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DEMO_ROUTES } from './demo-routes';

/** MODULES */
import { DemoComponentsModule } from './shared/components/components.module';
import { SharedModule } from '@shared/shared.module';

/** COMPONENTS */
import { DemoPagesComponent } from './demo.component';

@NgModule({
  declarations: [
    DemoPagesComponent,
  ],
  imports: [
    CommonModule,
    DEMO_ROUTES,
    SharedModule,
    DemoComponentsModule
  ],
  exports: [
    DemoPagesComponent
  ]
})
export class DemoPagesModule {}
